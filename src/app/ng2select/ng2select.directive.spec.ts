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
import { Ng2Select } from './ng2select.directive';

@Component({
  selector: 'test-component',
  template: `<select><option [value]="120">one hundred twenty</option></select>`
})
class TestComponent {}

describe('Ng2Select Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<Ng2Select>) => {
      fixture.detectChanges();
    });
  })));
});
