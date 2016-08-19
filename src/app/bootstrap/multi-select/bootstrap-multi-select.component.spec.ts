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
import { BootstrapMultiSelectComponent } from './bootstrap-multi-select.component';

describe('Component: BootstrapSelect', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BootstrapMultiSelectComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BootstrapMultiSelectComponent],
      (component: BootstrapMultiSelectComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BootstrapSelectComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BootstrapMultiSelectComponent));
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
  directives: [BootstrapMultiSelectComponent]
})
class BootstrapSelectComponentTestController {
}

