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
    selector: 'ix-bootstrap-select[multiple]',
    templateUrl: 'bootstrap-multi-select.component.html',
    styleUrls: ['bootstrap-multi-select.component.css'],
    directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [new NgModelInputValueAccessor(BootstrapMultiSelectComponent)]
})
export class BootstrapMultiSelectComponent extends BootstrapSelect implements OnInit, AfterContentInit, AfterViewInit {

    constructor() { super(); }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.options.changes.subscribe(options => options.forEach(option => {
            if (this.ngModel && this.ngModel.length)
                this.syncNgModelMultiselect(this.ngModel);

            option.click.subscribe(o => this.toggleNgModelMultiselect(o))
        }));
    }

    ngAfterViewInit() {

    }

    onBlur($event) {

    }

    selectAll() {
        /* Set all options as active using the observable list */
        this.options.forEach(o => o.active = true);

        let activeOptions: IxOptionComponent[] = this.options.filter(o => o.active);
        let newVals: any[] = activeOptions.map(o => o.value);
        this.onNgModelChanged(newVals);
        this.change.emit(newVals);

        this.setTitleMultiselect(activeOptions);
    }

    unselectAll() {
        /* Set all options as inactive using the observable list */
        this.options.forEach(o => o.active = false);

        let activeOptions: IxOptionComponent[] = this.options.filter(o => o.active);
        let newVals: any[] = activeOptions.map(o => o.value);
        this.onNgModelChanged(newVals);
        this.change.emit(newVals);

        this.setTitleMultiselect(activeOptions);
    }

    setTitleMultiselect(activeOptions: IxOptionComponent[]) {
        if (!activeOptions.length)
            return this.title = '<-- select -->';

        if (activeOptions.length <= 2)
            return this.title = activeOptions.map(o => o.title).join(', ');

        return this.title = `${activeOptions.length} selected`;
        //let newVals: any[] = this.options.filter(o => o.active === true).flatMap(project: (value: IxOptionComponent, index: number) => Subscribable<I> | Promise<I> | ArrayLike<I>, resultSelector: (outerValue: IxOptionComponent, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number).toArray();
        //this.title = newVals.join(',');
    }

    syncNgModelMultiselect(newVals: any[]) {
        this.options.forEach(o => o.active = false);

        let activeOptions = this.options.filter(o => newVals.indexOf(o.value) > -1);
        activeOptions.forEach(o => o.active = true);

        this.setTitleMultiselect(activeOptions);
    }

    toggleNgModelMultiselect(option: IxOptionComponent) {
        /* Toogle the clicked option's active property using the observable list */
        this.options.filter(o => o.value == option.value).forEach(o => o.active = !o.active);

        let activeOptions: IxOptionComponent[] = this.options.filter(o => o.active);
        let newVals: any[] = activeOptions.map(o => o.value);
        this.onNgModelChanged(newVals);
        this.change.emit(newVals);

        this.setTitleMultiselect(activeOptions);
    }

    /* Override writeValue() from ControlValueAccessor */
    writeValue(newVals: any) {
        super.writeValue(newVals);

        if (this.options)
            this.syncNgModelMultiselect(newVals);
    }
}
