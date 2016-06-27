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

import { IxOptionComponent, IX_DIRECTIVES } from '../../core';
import { ComboSelectComponent } from '../../combo';

import { ExampleLayoutComponent, ExampleService, IUser } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-example-custom',
  templateUrl: 'custom.component.html',
  styleUrls: ['custom.component.css'],
  directives: [COMMON_DIRECTIVES, ComboSelectComponent, ExampleLayoutComponent, IX_DIRECTIVES],
  pipes: [COMMON_PIPES]
})
export class CustomComponent implements OnInit {
  public open: boolean = false;
  public ngModel = 14;
  public options: Observable<IUser[]>;

  constructor(public exampleSvc: ExampleService) { }

  ngOnInit() {
    this.options = this.exampleSvc.getItems();
    //this.options.subscribe();
  }

  blur($event){
    console.log('blur => this.options', this.options);
    //this.options.flatMapTo((users, user, outer, inner) => user, null).toArray();
  }

  onChange(newVal){

  }

  toggle(newVal: boolean): void{
      this.open = newVal;
  }

}
