import { Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/common';
import { IX_DIRECTIVES, IxOptionComponent } from '../core';

const noop = () => { };

export class ComboSelect implements ControlValueAccessor {
    @Input() ngModel: any;
    @Output() ngModelChange = new EventEmitter();
    @Output() change = new EventEmitter();
    @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

    _title: string;
    inputTitle: string;
    builder = null;
    open: boolean = false;
    onNgModelChanged: (_: any) => void = noop;
    onNgModelTouched: (_: any) => void = noop;
    
    get title(): string { return this._title; };
    set title(newVal: string) {
        if (newVal !== this._title) {
            this._title = newVal;
            this.inputTitle = newVal;
        }
    }

    constructor(){

    }

    toggle(newVal: boolean): void {
        this.open = newVal;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onNgModelChanged = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onNgModelTouched = fn;
    }

    //From ControlValueAccessor interface
    writeValue(newVal: any) {
        this.ngModel = newVal;
    }
}