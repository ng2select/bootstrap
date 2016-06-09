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
import { IX_DIRECTIVES, IxOptionComponent } from '../../ix-select';

@Component({
  moduleId: module.id,
  selector: 'app-example-playground',
  templateUrl: 'playground.component.html', 
  styleUrls: ['playground.component.css'],
  directives: [IX_DIRECTIVES, ExampleLayoutComponent],
  pipes: [AsyncPipe]
})
export class PlaygroundComponent implements OnInit {
  
  public selectedOption: IxOptionComponent;
  public title: string;
  public users: Observable<IUser[]>;

  constructor(public exampleSvc: ExampleService) { }

  ngOnInit() {
    this.users = this.exampleSvc.getItems();
  }
  
  setTitle(option: IxOptionComponent){
    if(!option || !option.elem)
    return;
    this.title = option.elem.title;
    console.log('this.selectedOption', this.selectedOption);
  }

}