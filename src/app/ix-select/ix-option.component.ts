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

import {IxSelectComponent} from './ix-select.component';

@Component({
  moduleId: module.id,
  selector: 'ix-option',
  //styles: [],
  template: `
    <a [id]="value" (click)="click()" [class.active]="active">
      <span class="text">
        <ng-content></ng-content>
      </span>
    </a>
  `
})
export class IxOptionComponent implements AfterViewInit {
  @Input() value: string;
  @Input() active = false;
  @Output() setActive = new EventEmitter();
  
  elem = null;
  
  constructor(elementRef: ElementRef){ //private ixSelect: IxSelectComponent
    this.elem = elementRef.nativeElement;
  }

  focus(): void {
    this.elem.focus();
  }

  click(): void {
    this.setActive.emit(this);
  }
  
  ngAfterViewInit(){
    
  }
}
