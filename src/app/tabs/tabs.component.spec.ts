// import {
//   beforeEach,
//   beforeEachProviders,
//   describe,
//   expect,
//   it,
//   inject,
// } from '@angular/core/testing';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { TabsComponent } from './tabs.component';

// describe('Component: Tabs', () => {
//   let builder: TestComponentBuilder;

//   beforeEachProviders(() => [TabsComponent]);
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));

//   it('should inject the component', inject([TabsComponent],
//       (component: TabsComponent) => {
//     expect(component).toBeTruthy();
//   }));

//   it('should create the component', inject([], () => {
//     return builder.createAsync(TabsComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(TabsComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });

// @Component({
//   selector: 'test',
//   template: `
//     <app-tabs></app-tabs>
//   `,
//   directives: [TabsComponent]
// })
// class TabsComponentTestController {
// }

