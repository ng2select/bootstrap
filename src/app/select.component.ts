import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { DemoComponent } from './demo';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [DemoComponent],
  pipes: [COMMON_PIPES]
  //encapsulation: ViewEncapsulation.None
})
export class SelectAppComponent implements OnInit, OnDestroy {

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
