import { Component, OnInit } from '@angular/core';
import 'highlight.js';

@Component({
  moduleId: module.id,
  selector: 'app-example-layout',
  templateUrl: 'layout.component.html',
  styleUrls: [
    'layout.component.css' 
    ]
})
export class ExampleLayoutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    //hljs.initHighlightingOnLoad();
    //hljs.initHighlightingOnLoad();
  }

}
