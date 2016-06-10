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

const IX_SELECT_CONTROL_VALUE_ACCESSOR = new Provider(
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
  providers: [IX_SELECT_CONTROL_VALUE_ACCESSOR],
  //styleUrls: ['ix-select.component.css']
})
export class IxBuilderComponent implements AfterContentInit, AfterViewInit, ControlValueAccessor {

  @ContentChild(IxButtonComponent) btn: IxButtonComponent;
  @ContentChild(IxDisplayComponent) display: IxDisplayComponent;
  @ContentChild(IxInput) input: IxInput;
  @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

  @Input() ngModel: any;
  @Input() open: boolean;

  @Output() title = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  private elem = null;
  private renderer: Renderer;
  private _value: any = '';

  //Placeholders for the ngModel callbacks
  private _onTouchedCallback: (_: any) => void = noop;

  private _onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any { return this.ngModel; };

  //set accessor including call the ngModel onchange callback
  set value(v: any) {
    if (v !== this.ngModel) {
      this.ngModel = v;
      this._onChangeCallback(v);
    }
  }

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
    console.log('this.input', this.input);

    //console.log('this.options', this.options);

    //this.options.changes.debounceTime(200).do(o => this.setTitle(o)).subscribe();

    this.options.forEach(option => console.log('option', option));

    let initialSelectedOptions = this.options.filter(o => o.value === this.value);

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

    // activate the option the user has clicked on
    option.active = true;

    this.value = option;

    // set title based on option selected
    this.setTitle(option);
  }

  setTitle(option: IxOptionComponent) {
    this.title.emit(option);
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this.value = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
}

export const IX_DIRECTIVES = [IxBuilderComponent, IxButtonComponent, IxOptionComponent, IxDisplayComponent, IxInput];