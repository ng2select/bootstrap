import { Component, Directive, ElementRef, EventEmitter, forwardRef, Host, HostBinding, Input, Output, OnInit, OnChanges, OnDestroy, Provider, SimpleChange, ViewChild, AfterViewInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES} from "@angular/common"; import * as $ from 'jquery';
import 'bootstrap';
import 'selectpicker';
import { INg2SelectConfig, Ng2SelectConfig } from './';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => Ng2Select),
    multi: true
  });

@Directive({
  selector: 'select',
  host: {
    'class': 'selectpicker'
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class Ng2Select implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges, OnDestroy {
  public model;

  @Input() config: INg2SelectConfig;
  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  //The internal data model
  private _value: any = '';

  //Placeholders for the callbacks
  private _onTouchedCallback: (_: any) => void = noop;

  private _onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any { return this._value; };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  private elem;
  //private ngModel;
  private selectPicker;

  constructor(private elemRef: ElementRef) {
    this.elem = this.elemRef.nativeElement;
    console.log('select directive elem', this.elem);
  }

  ngOnInit() {
    this.getSetNgModel(this.getNgModel());
    console.log('ngModel', this.ngModel);
  }

  ngAfterViewInit() {
    this.selectPicker = this.initSelectPicker(this.config || new Ng2SelectConfig());
    this.subscribeToChanges();
    console.log('this.selectPicker', this.selectPicker);
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    console.log('select ngOnChanges()', changes);
  }

  initSelectPicker(config: INg2SelectConfig) {
    $(this.elem).selectpicker(config);
    return $(this.elem).data('selectpicker');
  }
  
  isDefined(value) {
    return typeof value !== 'undefined';
  }

  getSetNgModel(newVal?: any) {
    if (this.isDefined(newVal)) {
      this.ngModel = newVal;
      this.ngModelChange.emit(newVal);
    }

    return this.ngModel;
  }

  hostOnChange(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  getNgModel() {
    let options = this.elem.options;
    return Array.apply(null, options)  // convert to real Array
      .filter(option => option.selected)
      .map(option => +option.value)
  }

  setNgModel() {
    let options = this.elem.options;
    for (let i = 0; i < options.length; i++) {
      options[i].selected = this.ngModel.indexOf(options[i].value) > -1;
    }
  }

  subscribeToChanges() {
    let vm = this;
    $(this.elem).on('changed.bs.select', (e, index, newVal, oldVal) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();

      setTimeout(() => {
        vm.getSetNgModel(vm.getNgModel());
      }, 50);

      // if (vm.onChange)
      //   vm.onChange.emit(vm.getSetNgModel());
    });
  }

  //Set touched on blur
  onTouched() {
    //this._onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this._value = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  ngOnDestroy() {
    $(this.elem).selectpicker('destroy');
  }
}

