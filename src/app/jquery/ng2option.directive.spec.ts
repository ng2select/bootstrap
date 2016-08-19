import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { Ng2Option } from './ng2option.directive';

@Component({
  selector: 'test-component',
  template: `<div ng2option></div>`
})
class TestComponent {}

describe('Ng2option Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<Ng2Option>) => {
      fixture.detectChanges();
    });
  })));
});
