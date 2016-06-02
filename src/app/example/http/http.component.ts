import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/rx';
import * as hljs from 'highlight.js';
import { ExampleService, IUser } from '../../shared';
import { ExampleLayoutComponent } from '../layout';
import { Ng2Select, Ng2Option } from '../../ng2select';

@Component({
  moduleId: module.id,
  selector: 'app-example-http',
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.css'],
  directives: [ExampleLayoutComponent, Ng2Select, Ng2Option],
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

  // getUsers() {
  //   this.users = [];

  //   this.exampleSvc.getUsers()
  //     .then(result => {
  //       this.users = this.filteredUsers = result;
  //     });
  // }
}
