import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Query,
  QueryList,
  OnInit,
  Input,
  Inject,
  AfterContentInit,
  ContentChild,
  ViewChildren
} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ExampleLayoutComponent } from '../layout';
import { ExampleService, IUser } from '../../shared';
import { IX_DIRECTIVES } from '../../ix-select';

@Component({
  moduleId: module.id,
  selector: 'app-example-playground',
  templateUrl: 'playground.component.html', 
  styleUrls: ['playground.component.css'],
  directives: [IX_DIRECTIVES, ExampleLayoutComponent],
  pipes: [AsyncPipe]
})
export class PlaygroundComponent implements OnInit {
  
  public selectedOption: number = 1;
  public title;
  public users: Observable<IUser[]>;

  constructor(public exampleSvc: ExampleService) { }

  ngOnInit() {
    this.users = this.exampleSvc.getItems();
  }
  
  setTitle($event){
    this.title = $event;
  }

}