import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import { ExampleService, ExceptionService } from './shared';
import { HttpComponent, UiUxComponent } from './example';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [HttpComponent, UiUxComponent],
  providers: [ExampleService, ExceptionService, HTTP_PROVIDERS]
})
export class SelectAppComponent implements OnInit, OnDestroy {

  constructor() {

  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }
}
