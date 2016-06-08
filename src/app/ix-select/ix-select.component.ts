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

import { IxOptionComponent } from './ix-option.component';
import { IxLabelComponent } from './ix-label.component';

const noop = () => { };

const IX_SELECT_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => IxSelectComponent),
    multi: true
  });

@Component({
  moduleId: module.id,
  selector: 'ix-select-builder',
  template: `
    <div class="btn-group bootstrap-select show-tick" [ngClass]="{open: open}" (blur)="toggle($event)">
    <div (click)="toggle($event)"> <!-- [innerHTML]="label.elem.innerHTML" -->
      <ng-content select="ix-label"></ng-content> 
    </div>
    <div class="dropdown-menu open">
    <div class="bs-actionsbox">
      <div class="btn-group btn-group-sm btn-block">
        <button type="button" class="actions-btn bs-select-all btn btn-default">Select All</button>
        <button type="button" class="actions-btn bs-deselect-all btn btn-default">Deselect All</button>
      </div>
    </div>
    <ul class="dropdown-menu inner"> <!-- [hidden]="!open" -->
      <li *ngFor="let option of options; let i = index" 
        (click)="selectOption(option)" 
        [class.active]="option.active" 
        [innerHTML]="option.elem.innerHTML">
      </li>
    </ul>
    </div>
    </div>
  `,
  host: { '(window:click)': 'onWindowClick($event)' },
  directives: [IxOptionComponent, IxLabelComponent],
  providers: [IX_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class IxSelectComponent implements AfterContentInit, AfterViewInit, ControlValueAccessor {

  @ContentChild(IxLabelComponent) label;
  @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;
  @Output() title = new EventEmitter();
  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  private elem = null;
  private open: boolean = false;
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
  }

  // contentChildren are set
  ngAfterContentInit() {
    console.log('this.options', this.options);

    //this.options.changes.debounceTime(200).do(o => this.setTitle(o)).subscribe();

    this.options.forEach(option => console.log('option', option));

    let initialSelectedOptions = this.options.filter(o => o.value === this.value);

    if (initialSelectedOptions.length)
      this.selectOption(initialSelectedOptions[0]);
  }

  isBlur($event) {
    return !this.elem.contains($event.target);
  }

  onWindowClick($event) {
    if (this.isBlur($event))
      this.open = false;
  }ß

  selectOption(option: IxOptionComponent) {
    // deactivate all options
    this.options.toArray().forEach(option => option.active = false);

    // activate the option the user has clicked on
    option.active = true;

    // set title based on option selected
    this.setTitle(option);
  }

  setTitle(option: IxOptionComponent) {
    this.title.emit(option.elem.innerHTML);
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

  toggle($event) {
    this.open = !this.open;
  }
}


export const IX_DIRECTIVES = [IxSelectComponent, IxOptionComponent];