import {
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Provider,
  Query,
  QueryList,
  OnInit,
  Input,
  Output,
  AfterContentInit,
  AfterViewInit,
  ContentChild,
  ViewChild,
  ViewChildren,
  ElementRef,
  RenderComponentType,
  Renderer
} from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  CORE_DIRECTIVES
} from "@angular/common";

import { Observable } from 'rxjs/Rx';

import { IX_DOM_CONSTANTS } from './shared';
import { IxOptionComponent } from './option.component';
import { IxDisplayComponent } from './display.component';

@Component({
  moduleId: module.id,
  selector: 'ix-select-builder',
  templateUrl: 'builder.component.html',
  styleUrls: ['builder.component.css'],
  host: { '(window:click)': 'onWindowClick($event)', '[window:height]': 'windowHeight' },
  exportAs: 'builderExport',
  directives: [IxOptionComponent, IxDisplayComponent]
})
export class IxBuilderComponent implements AfterContentInit, AfterViewInit {

  @ContentChild(IxDisplayComponent) display: IxDisplayComponent;
  @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

  @Input() open: boolean;
  @Output() toggle = new EventEmitter();

  private elem = null;
  private renderer: Renderer;
  private windowHeight;

  constructor(renderer: Renderer, elemRef: ElementRef) {
    this.elem = elemRef.nativeElement;
    this.renderer = renderer;
  }

  ngAfterViewInit() {

  }

  // contentChildren are set
  ngAfterContentInit() {
    this.options.changes.do(change => console.log('observable change', [change])).subscribe();
  }

  isBlur($event) {
    return this.elem !== $event.target && !this.elem.contains($event.target);
    // return !this.elem.querySelector(`#${IX_DOM_CONSTANTS.optionPrefix}${$event.target.id}`);
  }

  isDropup() {
    //console.log('this.elem', [this.elem, this.windowHeight]);
    return false;
    //this.elem.getBoundingClientRect()
  }

  onWindowClick($event) {
    if (this.isBlur($event))
      this.toggle.emit(false);
  }

  selectOption(option: IxOptionComponent) {

  }

}

export const IX_DIRECTIVES = [IxBuilderComponent, IxOptionComponent, IxDisplayComponent];
