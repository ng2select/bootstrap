import {
    AfterViewInit,
    Component,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    Provider,
    Query,
    QueryList,
    OnInit,
    Input,
    Output,
    Inject,
    AfterContentInit,
    ContentChild,
    ViewChildren,
    OnChanges,
    SimpleChange
} from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/common';
import { Observable, Subject } from 'rxjs/Rx';
import { IX_DIRECTIVES, IxOptionComponent } from '../../core';
import { BootstrapSelect } from '../bootstrap-select';

const BOOTSTRAP_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => BootstrapSelectComponent),
        multi: true
    });

@Component({
    moduleId: module.id,
    selector: 'ix-bootstrap-select:not([multiple])',
    templateUrl: 'bootstrap-select.component.html',
    styleUrls: ['bootstrap-select.component.css'],
    directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [BOOTSTRAP_CONTROL_VALUE_ACCESSOR]
})
export class BootstrapSelectComponent extends BootstrapSelect implements OnInit, AfterContentInit, ControlValueAccessor {

    constructor() { super(); }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.options.changes.subscribe(options => options.forEach(option => {
            if (this.ngModel)
                this.syncNgModelSingleselect(this.ngModel);

            option.click.subscribe(o => this.setNgModelSingleselect(o));
        }));

        // if(this.ngModel[0])
        //     this.onChange(this.options.filter(o => o.value == this.ngModel[0])[0]);
    }

    onBlur($event) {
        //console.log('blur => this.options', this.options);
    }

    // ngOnChanges(changes: {[key: string]: SimpleChange;}){
    //     let ngModelChange = changes['ngModel'];
    //     if(ngModelChange && !ngModelChange.isFirstChange()){
    //         this.onChange(this.options.filter(o => o.value == ngModelChange.currentValue)[0])
    //     }
    // }

    isDropup() {

    }

    // onChange(option: IxOptionComponent) {
    //     if (!option || !option.elem)
    //         return;

    //     return this.setNgModelSingleselect(option);
    // }

    setNgModelSingleselect(option: IxOptionComponent) {
        /* Set all option's active property as false using the observable list */
        this.options.forEach(option => option.active = false);
        /* Set the clicked option's active property to true using the observable list */
        this.options.filter(o => o.value == option.value).forEach(o => o.active = true);

        this.onNgModelChanged(option.value);
        this.change.emit(option.value);
        this.setTitle(option);
    }

    setTitle(option: IxOptionComponent) {
        if (!option || !option.elem)
            return;
        this.title = option.title;
    }

    syncNgModelSingleselect(newVal: any) {
        this.options.forEach(o => o.active = false);

        let activeOptions = this.options.filter(o => o.value === newVal);
        activeOptions.forEach(o => o.active = true);

        this.setTitle(activeOptions[0]);
    }

    /* Override writeValue() from ControlValueAccessor */
    writeValue(newVal: any) {
        super.writeValue(newVal);

        if (this.options)
            this.syncNgModelSingleselect(newVal);
    }

}
