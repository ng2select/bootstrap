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

@Directive({
  selector: 'input'
})
export class IxInput implements AfterViewInit {  
  elem = null;
  @Input() value = null;
  ngModel = null;
  
  constructor(elementRef: ElementRef){ 
    this.elem = elementRef.nativeElement;
  }
  
  ngAfterViewInit(){

  }
}
