import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Provider,
  Query,
  QueryList,
  OnInit,
  Input,
  Output,
  Inject,
  AfterContentInit,
  ContentChild,
  ViewChildren
} from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { IX_DIRECTIVES, IxOptionComponent } from '../core';

const noop = () => { };

const BOOTSTRAP_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => BootstrapSelectComponent),
    multi: true
  });

@Component({
  moduleId: module.id,
  selector: 'ix-bootstrap-select',
  templateUrl: 'bootstrap.component.html',
  styleUrls: ['bootstrap.component.css'],
  directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
  pipes: [COMMON_PIPES],
  providers: [BOOTSTRAP_CONTROL_VALUE_ACCESSOR]
})
export class BootstrapSelectComponent implements OnInit, ControlValueAccessor {
  @Input() ngModel: any;
  @Output() ngModelChange = new EventEmitter();
  @Output() change = new EventEmitter();
  @ContentChildren(IxOptionComponent) options: Observable<IxOptionComponent>;

  open: boolean = false;
  selectedOption: IxOptionComponent = null;
  title: string = "<-- select -->";
  onNgModelTouched: (_: any) => void = noop;
  onNgModelChanged: (_: any) => void = noop;

  constructor() { }

  ngOnInit() {

  }

  blur($event){
    //console.log('blur => this.options', this.options);
  }

  onChange(option: IxOptionComponent){
    if(!option || !option.elem)
    return;

    this.setNgModel(option);
  }

  setNgModel(option: IxOptionComponent){
    this.onNgModelChanged(option.value);
    this.change.emit(option.value);
  }

  setTitle(option: IxOptionComponent){
    if(!option || !option.elem)
      return;
    this.title = option.elem.innerHTML;
  }

  toggle(newVal: boolean): void{
      this.open = newVal;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onNgModelChanged = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onNgModelTouched = fn;
  }

  //From ControlValueAccessor interface
  writeValue(newVal: any) {
    this.ngModel = newVal;
  }

}
