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

import {DOCUMENT} from '@angular/platform-browser';

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
  host: { '(window:click)': 'onWindowClick($event)' },
  directives: [IxOptionComponent, IxDisplayComponent]
})
export class IxBuilderComponent implements AfterContentInit, AfterViewInit {

  @ContentChild(IxDisplayComponent) display: IxDisplayComponent;
  @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

  @Input() open: boolean;
  //@Output() change = new EventEmitter();
  @Output() toggle = new EventEmitter();

  private elem = null;
  private renderer: Renderer;

  constructor(renderer: Renderer, elemRef: ElementRef) {
    this.elem = elemRef.nativeElement;
    this.renderer = renderer;
  }

  ngAfterViewInit() {
    //this.title.emit('<-- select -->');
    //this.renderer.attachViewAfter()
  }

  // contentChildren are set
  ngAfterContentInit() {
    this.options.changes.do(change => console.log('observable change', [change])).subscribe();
    // let initialSelectedOptions = this.options.filter(o => o.value === this.ngModel);
    // if (initialSelectedOptions.length)
    //   this.selectOption(initialSelectedOptions[0]);
  }

  isBlur($event) {
    return this.elem !== $event.target && !this.elem.contains($event.target);
    // return !this.elem.querySelector(`#${IX_DOM_CONSTANTS.optionPrefix}${$event.target.id}`);
  }

  isDropup() {
    return false;
    //this.elem.getBoundingClientRect()
  }

  onWindowClick($event) {
    if (this.isBlur($event))
      this.toggle.emit(false);
  }

  selectOption(option: IxOptionComponent) {
    // deactivate all options
    //this.options.toArray().forEach(option => option.active = false);

    //option.active = true;

    //this.setNgModel(option);

    //this.setTitle(option);

    //this.change.emit(option);
  }

}

export const IX_DIRECTIVES = [IxBuilderComponent, IxOptionComponent, IxDisplayComponent];
