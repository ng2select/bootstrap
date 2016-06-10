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
  selector: 'ix-bootstrap-select',
  templateUrl: 'bootstrap.component.html', 
  styleUrls: ['bootstrap.component.css'],
  directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
  pipes: [COMMON_PIPES]
})
export class BootstrapSelectComponent implements OnInit {
  @ContentChildren(IxOptionComponent) options: Observable<IxOptionComponent>;

  open: boolean = false;
  selectedOption: IxOptionComponent;
  title: string = "<-- select -->";

  constructor() { }

  ngOnInit() {

  }

  blur($event){
    //console.log('blur => this.options', this.options);
  }
  
  setTitle(option: IxOptionComponent){
    if(!option || !option.elem)
    return;
    this.title = option.elem.innerHTML;
    console.log('this.selectedOption', this.selectedOption);
  }

  toggle(newVal: boolean): void{
      this.open = newVal;
  }

}