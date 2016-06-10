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
    <span (click)="onclick($event)">
      <ng-content></ng-content>
    </span>
  `,
  directives:[]
})
export class IxButtonComponent implements AfterViewInit {  
  @Output() toggle = new EventEmitter();
  elem = null;
  
  constructor(elementRef: ElementRef){ 
    this.elem = elementRef.nativeElement;
  }
  
  onclick($event){
    this.toggle.emit(true);
    return false;
  }
  
  ngAfterViewInit(){

  }
}
