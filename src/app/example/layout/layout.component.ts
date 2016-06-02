import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  moduleId: module.id,
  selector: 'app-example-layout',
  templateUrl: 'layout.component.html',
  styleUrls: [
    'layout.component.css'
  ]
  //encapsulation: ViewEncapsulation.None
})
export class ExampleLayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //hljs.initHighlighting();
  }

}
