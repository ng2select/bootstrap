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
import { BootstrapSelectComponent } from './bootstrap-select.component';

describe('Component: BootstrapSelect', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BootstrapSelectComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BootstrapSelectComponent],
      (component: BootstrapSelectComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BootstrapSelectComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BootstrapSelectComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <ix-bootstrap-select></ix-bootstrap-select>
  `,
  directives: [BootstrapSelectComponent]
})
class BootstrapSelectComponentTestController {
}

