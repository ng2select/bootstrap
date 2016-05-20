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
// import { PopupComponent } from './popup.component';

// describe('Component: Popup', () => {
//   let builder: TestComponentBuilder;

//   beforeEachProviders(() => [PopupComponent]);
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));

//   it('should inject the component', inject([PopupComponent],
//       (component: PopupComponent) => {
//     expect(component).toBeTruthy();
//   }));

//   it('should create the component', inject([], () => {
//     return builder.createAsync(PopupComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(PopupComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });

// @Component({
//   selector: 'test',
//   template: `
//     <app-popup></app-popup>
//   `,
//   directives: [PopupComponent]
// })
// class PopupComponentTestController {
// }

