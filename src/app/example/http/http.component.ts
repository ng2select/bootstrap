import { Component, OnInit } from '@angular/core';
import { ExampleService, User } from '../../shared';
import { ExampleLayoutComponent } from '../layout';
import { Ng2Select } from '../../ng2select';

@Component({
  moduleId: module.id,
  selector: 'app-example-http',
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.css'],
  directives: [ExampleLayoutComponent, Ng2Select]
})
export class HttpComponent implements OnInit {
  
  public users;
  public filteredUsers = this.users;

  constructor(private exampleSvc: ExampleService) {}

  ngOnInit() {
    //this.exampleSvc.getUsers();
  }

  getUsers() {
    this.users = [];

    this.exampleSvc.getUsers()
      .subscribe(newUsers => {
        this.users = this.filteredUsers = newUsers;
      });
  }
}
