import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { By } from '@angular/platform-browser';
import { ExampleService, ExceptionService } from '../shared';
import { PlaygroundComponent } from './playground.component';

describe('Component: Playground', () => {
  let builder: TestComponentBuilder;
  beforeEachProviders(() => [PlaygroundComponent, ExampleService, ExceptionService, HTTP_PROVIDERS, provide(XHRBackend, {useClass: MockBackend})]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PlaygroundComponent],
      (component: PlaygroundComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PlaygroundComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PlaygroundComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-example-playground></app-example-playground>
  `,
  directives: [PlaygroundComponent]
})
class PlaygroundComponentTestController {
}
