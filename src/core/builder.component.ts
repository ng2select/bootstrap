import {
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Provider,
  Query,
  QueryList,
  OnInit,
  Input,
  Output,
  AfterContentInit,
  AfterViewInit,
  ContentChild,
  ViewChild,
  ViewChildren,
  ElementRef,
  RenderComponentType,
  Renderer
} from '@angular/core';

import {DOCUMENT} from '@angular/platform-browser';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  CORE_DIRECTIVES
} from "@angular/common";

import { IX_DOM_CONSTANTS } from './shared';
import { IxOptionComponent } from './option.component';
import { IxButtonComponent } from './button.component';
import { IxDisplayComponent } from './display.component';
import { IxInput } from './input.directive';

const noop = () => { };

const IX_BUILDER_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => IxBuilderComponent),
    multi: true
  });

@Component({
  moduleId: module.id,
  selector: 'ix-select-builder',
  templateUrl: 'builder.component.html',
  host: { '(window:click)': 'onWindowClick($event)' },
  directives: [IxOptionComponent, IxButtonComponent, IxDisplayComponent],
  providers: [IX_BUILDER_CONTROL_VALUE_ACCESSOR],
  //styleUrls: ['ix-select.component.css']
})
export class IxBuilderComponent implements AfterContentInit, AfterViewInit, ControlValueAccessor {

  @ContentChild(IxButtonComponent) btn: IxButtonComponent;
  @ContentChild(IxDisplayComponent) display: IxDisplayComponent;
  @ContentChild(IxInput) input: IxInput;
  @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

  @Input() ngModel: any;
  @Input() open: boolean;

  @Output() change = new EventEmitter();
  @Output() title = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() ngModelChange = new EventEmitter();

  private elem = null;
  private renderer: Renderer;
  private onNgModelTouched: (_: any) => void = noop;
  private onNgModelChanged: (_: any) => void = noop;

  constructor(renderer: Renderer, elemRef: ElementRef) {
    this.elem = elemRef.nativeElement;
    this.renderer = renderer;
  }

  ngAfterViewInit() {
    this.title.emit('<-- select -->');
    //this.renderer.attachViewAfter()
  }

  // contentChildren are set
  ngAfterContentInit() {
    let initialSelectedOptions = this.options.filter(o => o.value === this.ngModel);

    if (initialSelectedOptions.length)
      this.selectOption(initialSelectedOptions[0]);
  }

  isBlur($event) {
    return this.elem !== $event.target && !this.elem.contains($event.target);
    // return !this.elem.querySelector(`#${IX_DOM_CONSTANTS.optionPrefix}${$event.target.id}`);
  }

  isDropup() {
    return false;
    //this.elem.getBoundingClientRect()
  }

  onWindowClick($event) {
    if (this.isBlur($event))
      this.toggle.emit(false);
  }

  selectOption(option: IxOptionComponent) {
    // deactivate all options
    this.options.toArray().forEach(option => option.active = false);

    option.active = true;

    this.setNgModel(option);

    this.setTitle(option);

    this.change.emit(option);
  }

  setNgModel(option: IxOptionComponent){
    this.onNgModelChanged(option);
  }

  setTitle(option: IxOptionComponent) {
    this.title.emit(option);
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this.ngModel = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onNgModelChanged = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onNgModelTouched = fn;
  }
}

export const IX_DIRECTIVES = [IxBuilderComponent, IxButtonComponent, IxOptionComponent, IxDisplayComponent, IxInput];
