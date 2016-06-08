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
  selector: 'ix-label', 
  //styles: [],
  template: `
    <ng-content></ng-content>
  `
})
export class IxLabelComponent implements AfterViewInit {  
  display = null;
  elem = null;
  
  constructor(elementRef: ElementRef){ //private ixSelect: IxSelectComponent
    this.elem = elementRef.nativeElement;
  }
  
  getDisplay(){
    
  }
  
  ngAfterViewInit(){
    //this.innerHTML = this.elem.innerHTML;
  }
}
