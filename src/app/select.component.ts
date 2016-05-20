import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { AccordianComponent } from './accordian/';
import { AccordianGroupComponent } from './accordian-group/';
import { SelectMultipleDirective } from './multiple/';
import { Tab, Tabset } from './tabs/';
import { PopupAppComponent } from './popup/';

@Component({
  moduleId: module.id,
  selector: 'select-app',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [Tab, Tabset, PopupAppComponent, SelectMultipleDirective]
})
export class SelectAppComponent implements OnInit, OnDestroy {
  tabs: any;
  // city: any;
  // cities: any[];
  // groups: any[];
  // isOpen = false;
  ngModel = null;
  // title = 'select works!';

  constructor(){
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }

  ngOnInit(){
    // this.cities = [{
    //   id: 1,
    //   name: 'slc'
    // },{
    //   id: 2,
    //   name: 'logan'    
    // }];

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

  onChange(newVal){
    console.log('newVal', newVal);
  }

  ngOnDestroy(){

  }
}
