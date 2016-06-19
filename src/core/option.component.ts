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

import { IX_DOM_CONSTANTS } from './shared';

@Component({
  moduleId: module.id,
  selector: 'ix-option',
  template: `
    <li (click)="onClick()">
      <div class="text">
        <ng-content></ng-content>
        <span *ngIf="active" class="glyphicon glyphicon-ok check-mark"></span>
      </div>
    </li>
  `
})
export class IxOptionComponent implements AfterViewInit {
  @Input() active: boolean = false;
  @Input() value: any;
  @Input() title: any;
  @Output() click: EventEmitter<IxOptionComponent> = new EventEmitter<IxOptionComponent>();

  elem = null;

  constructor(elementRef: ElementRef) { //private ixSelect: IxSelectComponent
    this.elem = elementRef.nativeElement;
  }

  ngAfterViewInit() {

  }

  onClick(){
    this.click.emit(this);
  }
}
