import { Input, Output, EventEmitter, forwardRef, ContentChildren, Provider, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };

export class NgModelInputValueAccessor extends Provider {
    constructor(component) {
        super(NG_VALUE_ACCESSOR, {
            useExisting: forwardRef(() => component),
            multi: true
        })
    }
}

export class NgModelInput implements ControlValueAccessor {
    @Input() public ngModel: any;
    @Output() public ngModelChange = new EventEmitter();
    @Output() public change = new EventEmitter();

    onNgModelChanged: (_: any) => void = noop;
    onNgModelTouched: (_: any) => void = noop;

    constructor() {

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
