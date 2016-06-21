import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ExampleService, ExceptionService, IUser } from './shared';
import { CustomComponent } from './custom';
import { PlaygroundComponent } from './playground';
import { HttpComponent } from './http';
import { UiUxComponent } from './ui-ux';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [CustomComponent, HttpComponent, PlaygroundComponent, UiUxComponent],
  providers: [HTTP_PROVIDERS, ExampleService, ExceptionService],
  pipes: [COMMON_PIPES]
  //encapsulation: ViewEncapsulation.None
})
export class SelectAppComponent implements OnInit, OnDestroy {

  options: Observable<IUser[]>;

  constructor(private exampleSvc: ExampleService) {

  }

  ngOnInit() {
    this.options = this.exampleSvc.getItems();
  }

  ngOnDestroy() {

  }
}
