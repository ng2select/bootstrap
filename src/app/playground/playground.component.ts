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
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';

import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { IxOptionComponent, IX_DIRECTIVES } from '../../core';
import { BootstrapSelectComponent, BootstrapMultiSelectComponent } from '../../bootstrap';
import { ExampleLayoutComponent, ExampleService, IUser } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-example-playground',
  templateUrl: 'playground.component.html',
  styleUrls: ['playground.component.css'],
  directives: [COMMON_DIRECTIVES, BootstrapSelectComponent, BootstrapMultiSelectComponent, ExampleLayoutComponent, IX_DIRECTIVES],
  pipes: [COMMON_PIPES]
})
export class PlaygroundComponent implements OnInit {
  changeCount = 0;
  open: boolean = false;
  ngModel = 13;
  ngModelAry = [12];
  options: Observable<IUser[]>;

  constructor(public exampleSvc: ExampleService) {

  }

  ngOnInit() {
    this.options = this.exampleSvc.getItems();
  }

  onBenchmarkComplete() {
    console.log('onBenchmarkComplete', arguments);
  }

  onChange(newVal) {
    this.changeCount++;
  }

}
