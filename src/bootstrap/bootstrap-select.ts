import { Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/common';
import { IX_DIRECTIVES, IxOptionComponent } from '../core';

const noop = () => { };

export class BootstrapSelect implements ControlValueAccessor {
    @Input() ngModel: any;
    @Output() ngModelChange = new EventEmitter();
    @Output() change = new EventEmitter();
    @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

    builder = null;
    open: boolean = false;
    title: string = "<-- select -->";
    onNgModelTouched: (_: any) => void = noop;
    onNgModelChanged: (_: any) => void = noop;

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