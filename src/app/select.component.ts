import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { Ng2Select } from './ng2select';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [Ng2Select]
})
export class SelectAppComponent implements OnInit, OnDestroy {
  selectOptions: any[];
  ngModel = { singleselect: 2, multiselect: [2]};

  constructor() {

  }

  ngOnInit() {
    this.selectOptions = [{
      id: 1,
      name: 'slc'
    }, {
      id: 2,
      name: 'logan'
    }, {
      id: 3,
      name: 'ogden'      
    }, { 
      id: 4,
      name: 'layton'      
    }, {
      id: 5,
      name: 'brigham'      
    }];
  }

  onChange(newVal) {
    console.log('newVal', newVal);
  }

  ngOnDestroy() {

  }
}
