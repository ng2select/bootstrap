import { Component, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import 'selectpicker';

@Component({
  selector: 'select-multiple',
  template: `{{title}}<p>
  <select #select multiple (change)="change($event.target.options)">
    <option *ngFor="let item of myOptions" [value]="item.value">
      {{item.name}}
    </option>
  </select>
  <br><button (click)="changeOptions()">select 1 and 3</button>
  <pre>{{selectedValues | json}}</pre>`
})
export class SelectMultipleDirective implements OnInit {
  @ViewChild('select') selectElRef;
  title = "Angular 2 beta - multi select list";
  myOptions = [
    { value: 1, name: "one" },
    { value: 2, name: "two" },
    { value: 3, name: "three" }];
  selectedValues = ['1', '2'];
  myModelProperty = this.myOptions[0];

  constructor() { console.clear(); }
  /* todo: configure <select /> to be hidden and hide artificial 
  select popuę-pbox when on mobile dev
  */

  ngOnInit() {
    console.log('$("select")', $('select'));
    $('select').selectpicker({
      style: 'btn-info',
      size: 4
    });
  }

  ngAfterViewInit() {
    this.updateSelectList();
  }

  updateSelectList() {
    let options = this.selectElRef.nativeElement.options;
    for (let i = 0; i < options.length; i++) {
      options[i].selected = this.selectedValues.indexOf(options[i].value) > -1;
    }
  }

  change(options) {
    this.selectedValues = Array.apply(null, options)  // convert to real Array
      .filter(option => option.selected)
      .map(option => option.value)
  }

  changeOptions() {
    this.selectedValues = ['1', '3'];
    this.updateSelectList();
  }
}


// import { Component, Directive, ElementRef, OnInit } from '@angular/core';

// @Directive({
//   //moduleId: module.id,
//   selector: 'select[multi]',
//   // inputs: ['message'],
//   // exportAs: 'popup',
//   host: {
//     '(change)': 'onChange($event, $event.target.value)'
//     //'[multiple]': 'multiple'
//   }
// })
// export class SelectMultipleDirective implements OnInit {
//   multiple: boolean = true;
//   message: String;

//   constructor(_elementRef: ElementRef) {
//     console.log(_elementRef);
//   }

//   ngOnInit() {

//   }

//   onChange($event, newVal): void {
//     console.log([$event, newVal]);
//     $event.preventDefault();
//     $event.stopImmediatePropagation();
//   }
// }
