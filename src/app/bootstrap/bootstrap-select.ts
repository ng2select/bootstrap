import { Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';

import { IX_DIRECTIVES, IxOptionComponent, NgModelInput } from '../core';

export class BootstrapSelect extends NgModelInput {
    @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

    builder = null;
    open: boolean = false;
    title: string = "<-- select -->";

    constructor(){
      super();
    }

    toggle(newVal: boolean): void {
        this.open = newVal;
    }
}
