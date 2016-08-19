import { Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';

import { IX_DIRECTIVES, IxOptionComponent, NgModelInput } from '../core';

export class ComboSelect extends NgModelInput {
    @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

    _title: string;
    builder = null;
    inputTitle: string;
    open: boolean = false;

    get title(): string { return this._title; };
    set title(newVal: string) {
        if (newVal !== this._title) {
            this._title = newVal;
            this.inputTitle = newVal;
        }
    }

    constructor(){
      super();
    }

    toggle(newVal: boolean): void {
        this.open = newVal;
    }
}
