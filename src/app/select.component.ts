import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { AccordianComponent } from './accordian/';
import { AccordianGroupComponent } from './accordian-group/';
import { SelectMultipleDirective } from './multiple/';
import { Tab, Tabset } from './tabs/';
import { PopupAppComponent } from './popup/';
import { MultiComponent } from './multi/';
import { SelectDirective } from './select';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [Tab, Tabset, PopupAppComponent, SelectMultipleDirective, MultiComponent, SelectDirective]
})
export class SelectAppComponent implements OnInit, OnDestroy {
  tabs: any;
  // city: any;
  selectOptions: any[];
  // groups: any[];
  // isOpen = false;
  ngModel = 2;
  // title = 'select works!';

  constructor() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
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

    // this.groups = [
    //   {
    //     heading: 'Dynamic 1',
    //     content: 'I am dynamic!'
    //   },
    //   {
    //     heading: 'Dynamic 2',
    //     content: 'Dynamic as well'
    //   }
    // ];
  }

  // removeDynamic() {
  //   this.groups.pop();
  // }

  onChange(newVal) {
    console.log('newVal', newVal);
    this.ngModel = newVal;
  }

  ngOnDestroy() {

  }
}
