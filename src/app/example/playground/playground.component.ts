import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Query,
  QueryList,
  OnInit,
  Input,
  Inject,
  AfterContentInit,
  ContentChild,
  ViewChildren
} from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ExampleLayoutComponent } from '../layout';
import { ExampleService, IUser } from '../../shared';
import { IX_DIRECTIVES, IxOptionComponent } from '../../ix-select';

@Component({
  moduleId: module.id,
  selector: 'app-example-playground',
  templateUrl: 'playground.component.html', 
  styleUrls: ['playground.component.css'],
  directives: [COMMON_DIRECTIVES, IX_DIRECTIVES, ExampleLayoutComponent],
  pipes: [COMMON_PIPES]
})
export class PlaygroundComponent implements OnInit {
  public open: boolean = false;
  public selectedOption: IxOptionComponent;
  public inputTitle: string;
  public options: Observable<IUser[]>;

  private _title: string;

    //get accessor
  get title(): string { return this._title; };

  //set accessor including set inputTitle
  set title(newVal: string) {
    if (newVal !== this._title) {
      this._title = newVal;
      this.inputTitle = newVal;
    }
  }

  constructor(public exampleSvc: ExampleService) { }

  ngOnInit() {
    this.options = this.exampleSvc.getItems();
    //this.options.subscribe();
  }

  comboInputChanged(newVal){
    console.log('comboInputChanged', newVal);
  }

  blur($event){
    console.log('blur => this.options', this.options);
    //this.options.flatMapTo((users, user, outer, inner) => user, null).toArray();
  }
  
  setTitle(option: IxOptionComponent){
    if(!option || !option.elem)
    return;
    this.title = option.elem.title;
    console.log('this.selectedOption', this.selectedOption);
  }

  toggle(newVal: boolean): void{
      this.open = newVal;
  }

}