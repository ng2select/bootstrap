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

import {IxButtonComponent} from './button.component';

@Component({
  moduleId: module.id,
  selector: 'ix-display', 
  template: `
    <ng-content></ng-content>
  `,
  directives:[IxButtonComponent]
})
export class IxDisplayComponent implements AfterViewInit {  
  elem = null;
  
  constructor(elementRef: ElementRef){ //private ixSelect: IxSelectComponent
    this.elem = elementRef.nativeElement;
  }
  
  ngAfterViewInit(){
    
  }
}
