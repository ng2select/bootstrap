import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpComponent } from './http.component';
import { ExampleService, ExceptionService } from '../shared';

describe('Component: Http', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ExampleService, ExceptionService, HttpComponent, HTTP_PROVIDERS]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HttpComponent],
      (component: HttpComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HttpComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HttpComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-example-http></app-example-http>
  `,
  directives: [HttpComponent]
})
class HttpComponentTestController {
}

