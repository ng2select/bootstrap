import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, Renderer } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IxBuilderComponent } from './builder.component';

describe('Component: IxSelect', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [IxBuilderComponent, Renderer]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([IxBuilderComponent],
      (component: IxBuilderComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IxBuilderComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(IxBuilderComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-ix-select></app-ix-select>
  `,
  directives: [IxBuilderComponent]
})
class IxBuilderComponentTestController {
}

