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
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable, Subject } from 'rxjs/Rx';

import { IX_DIRECTIVES, IxOptionComponent, NgModelInputValueAccessor } from '../../core';
import { BootstrapSelect } from '../bootstrap-select';

@Component({
    moduleId: module.id,
    selector: 'ix-bootstrap-select:not([multiple])',
    templateUrl: 'bootstrap-select.component.html',
    styleUrls: ['bootstrap-select.component.css'],
    directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [new NgModelInputValueAccessor(BootstrapSelectComponent)]
})
export class BootstrapSelectComponent extends BootstrapSelect implements OnInit, AfterContentInit {

    constructor() { super(); }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.options.changes.subscribe(options => options.forEach(option => {
            if (this.ngModel)
                this.syncNgModelSingleselect(this.ngModel);

            option.click.subscribe(o => this.setNgModelSingleselect(o));
        }));
    }

    onBlur($event) {

    }

    isDropup() {

    }

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
