import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AccordianGroupComponent } from './accordian-group.component';

describe('Component: AccordianGroup', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AccordianGroupComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AccordianGroupComponent],
      (component: AccordianGroupComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AccordianGroupComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AccordianGroupComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-accordian-group></app-accordian-group>
  `,
  directives: [AccordianGroupComponent]
})
class AccordianGroupComponentTestController {
}

