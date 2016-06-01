import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-http',
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private exampleSvc: ExampleService) {}

  ngOnInit() {
  }

}
