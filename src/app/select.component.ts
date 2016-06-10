import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ExampleService, ExceptionService, IUser } from './shared';
import { BootstrapSelectComponent } from '../bootstrap';
import { ComboSelectComponent } from '../combo';
import { NG2_SELECT_DIRECTIVES } from '../jquery';
//import { HttpComponent, UiUxComponent, PlaygroundComponent } from './example';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [BootstrapSelectComponent, ComboSelectComponent, NG2_SELECT_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ExampleService, ExceptionService],
  pipes: [COMMON_PIPES]
})
export class SelectAppComponent implements OnInit, OnDestroy {

  ngModel;
  options: Observable<IUser[]>;

  constructor(private exampleSvc: ExampleService) {
    
  }

  ngOnInit() {
    this.options = this.exampleSvc.getItems();
  }

  ngOnDestroy() {
    
  }
}
