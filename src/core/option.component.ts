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
    <a [id]="getId()" (click)="click()" [class.active]="active">
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

  constructor(elementRef: ElementRef) { //private ixSelect: IxSelectComponent
    this.elem = elementRef.nativeElement;
  }

  click(): void {
    this.setActive.emit(this);
  }

  getId() {
    return IX_DOM_CONSTANTS.optionPrefix + this.value;
    // return `${IX_DOM_CONSTANTS.optionPrefix}${this.value}`;
  }

  ngAfterViewInit() {

  }
}
