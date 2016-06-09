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
  selector: 'ix-button', 
  template: `
    <ng-content></ng-content>
  `,
  directives:[]
})
export class IxButtonComponent implements AfterViewInit {  
  elem = null;
  
  constructor(elementRef: ElementRef){ 
    this.elem = elementRef.nativeElement;
  }
  
  getDisplay(){
    
  }
  
  ngAfterViewInit(){

  }
}
