import {Component} from '@angular/core';
import {AccordianGroupComponent} from './../accordian-group/';

@Component({
  moduleId: module.id,
  selector: 'app-accordian',
  host: {
    'class': 'panel-group'
  },
  templateUrl: 'accordian.component.html',
  styleUrls: ['accordian.component.css']
})
export class AccordianComponent {
  groups: Array<AccordianGroupComponent> = [];

  constructor() {}

  addGroup(group: AccordianGroupComponent): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordianGroupComponent): void {
    this.groups.forEach((group: AccordianGroupComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  removeGroup(group: AccordianGroupComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
