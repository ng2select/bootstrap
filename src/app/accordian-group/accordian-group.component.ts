import { Component, Input, OnDestroy } from '@angular/core';

import { AccordianComponent } from './../accordian/';

@Component({
  moduleId: module.id,
  selector: 'app-accordian-group',
  templateUrl: 'accordian-group.component.html',
  styleUrls: ['accordian-group.component.css']
})
export class AccordianGroupComponent implements OnDestroy {
  private _isOpen: boolean = false;

  @Input() heading: string;

  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }

  constructor(private accordion: AccordianComponent) {
    this.accordion.addGroup(this);
  }

  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

}
