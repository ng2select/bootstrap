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
    <div [id]="getId()" (click)="onClick()">
      <div class="text">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class IxOptionComponent implements AfterViewInit {
  @Input() active: boolean = false;
  @Input() value: any;
  @Input() title: any;
  //@Output() click = new EventEmitter();

  elem = null;

  constructor(elementRef: ElementRef) { //private ixSelect: IxSelectComponent
    this.elem = elementRef.nativeElement;
  }

  onClick(): void {
    //this.click.emit(null);
  }

  getId() {
    return IX_DOM_CONSTANTS.optionPrefix + this.value;
    // return `${IX_DOM_CONSTANTS.optionPrefix}${this.value}`;
  }

  ngAfterViewInit() {

  }
}
