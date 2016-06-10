import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExampleLayoutComponent } from '../shared';
import { Ng2Select, Ng2Option } from '../../jquery';

@Component({
  moduleId: module.id,
  selector: 'app-example-ui-ux',
  templateUrl: 'ui-ux.component.html',
  styleUrls: ['ui-ux.component.css'],
  directives: [ExampleLayoutComponent, Ng2Select, Ng2Option]
})
export class UiUxComponent implements OnInit, OnDestroy {
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