import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Query,
  QueryList,
  OnInit,
  Input,
  Inject,
  AfterContentInit,
  ContentChild,
  ViewChildren
} from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { IX_DIRECTIVES, IxOptionComponent } from '../core';

@Component({
  moduleId: module.id,
  selector: 'ix-combo-select',
  templateUrl: 'combo.component.html',
  styleUrls: ['combo.component.css'],
  directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
  pipes: [COMMON_PIPES]
})
export class ComboSelectComponent implements OnInit {
  @ContentChildren(IxOptionComponent) options: Observable<IxOptionComponent>;

  open: boolean = false;
  selectedOption: IxOptionComponent;
  inputTitle: string;

  private _title: string;

  //get accessor
  get title(): string { return this._title; };

  //set accessor including set inputTitle
  set title(newVal: string) {
    if (newVal !== this._title) {
      this._title = newVal;
      this.inputTitle = newVal;
    }
  }

  constructor() { }

  ngOnInit() {

  }

  comboInputChanged(newVal) {
    console.log('comboInputChanged', newVal);
  }

  blur($event) {
    //onsole.log('blur => this.options', this.options);
  }

  setTitle(option: IxOptionComponent){
    if(!option || !option.elem)
      return;
    this.title = option.title;
  }

  toggle(newVal: boolean): void {
    this.open = newVal;
  }

}
