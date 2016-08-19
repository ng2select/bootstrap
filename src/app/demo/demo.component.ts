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

import { IxOptionComponent, IX_DIRECTIVES } from '../core';
import { ComboSelectComponent } from '../combo';
import { BootstrapSelectComponent, BootstrapMultiSelectComponent } from '../bootstrap';
import { NG2_SELECT_DIRECTIVES } from '../jquery';
import { ExampleLayoutComponent, ExampleService, IUser } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  directives: [BootstrapSelectComponent, BootstrapMultiSelectComponent, ExampleLayoutComponent, IX_DIRECTIVES, NG2_SELECT_DIRECTIVES],
  pipes: [COMMON_PIPES]
})
export class DemoComponent implements OnInit {
  public open: boolean = false;
  public ngModel = 14;
  public ngModelAry = [12];
  public optionsAsArray = [];
  public options: Observable<IUser[]>;

  constructor(public exampleSvc: ExampleService) { }

  ngOnInit() {
    this.options = this.exampleSvc.getItems();
    //this.exampleSvc.getItems().subscribe((options: any[]) => this.optionsAsArray = options);
  }

  onChange(){

  }

}
