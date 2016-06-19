import {
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Query,
  QueryList,
  OnInit,
  Input,
  Output,
  AfterContentInit,
  AfterViewInit,
  ContentChild,
  ViewChildren
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ix-display',
  template: `
    <ng-content></ng-content>
  `
})
export class IxDisplayComponent implements AfterViewInit {
  elem = null;

  constructor(elementRef: ElementRef){
    this.elem = elementRef.nativeElement;
  }

  ngAfterViewInit(){

  }
}
