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
  selector: 'ix-select-builder li',
  //styleUrls: ['option.component.css'],
  host: {
    '[class.selected]': 'active'
  },
  template: `
    <a (click)="onClick()">
        <ng-content></ng-content>
        <!-- <i class="fa fa-check"></i> -->
        <span class="glyphicon glyphicon-ok check-mark"></span>
    </a>
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
