import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import * as hljs from 'highlight.js';
import {ExampleLayoutComponent, ExampleService, IUser } from '../shared';
import { NG2_SELECT_DIRECTIVES } from '../../jquery';

@Component({
  moduleId: module.id,
  selector: 'app-example-http',
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.css'],
  directives: [ExampleLayoutComponent, NG2_SELECT_DIRECTIVES],
  pipes: [AsyncPipe]
})
export class HttpComponent implements OnInit, AfterViewInit {

  public elem;
  public errorMsg: string;
  public users: Observable<IUser[]>;
  public filteredUsers = this.users;
  public ngModel;

  constructor(private exampleSvc: ExampleService) {  //private elemRef: ElementRef,
    //this.elem = this.elemRef.nativeElement;
  }

  ngOnInit(): void {
    this.users = this.exampleSvc.getItems();
  }

  ngAfterViewInit() {
    //hljs.initHighlighting();
  }
}
