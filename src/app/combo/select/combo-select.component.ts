import {
    AfterViewInit,
    Component,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    Query,
    QueryList,
    OnInit,
    Input,
    Output,
    Inject,
    AfterContentInit,
    ContentChild,
    Provider,
    ViewChildren
} from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { Observable, Subject } from 'rxjs/Rx';

import { IX_DIRECTIVES, KEYCODE, IxOptionComponent, NgModelInputValueAccessor } from '../../core';
import { ComboSelect } from '../combo-select';

@Component({
    moduleId: module.id,
    selector: 'ix-combo-select',
    templateUrl: 'combo-select.component.html',
    styleUrls: ['combo-select.component.css'],
    directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [new NgModelInputValueAccessor(ComboSelectComponent)]
})
export class ComboSelectComponent extends ComboSelect implements OnInit, AfterContentInit {

    constructor() { super(); }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.options.changes.subscribe(options => options.forEach(option => {
            if (this.ngModel)
                this.syncNgModelSingleselect(this.ngModel);

            option.click.subscribe(o => this.setNgModelSingleselect(o))
        }));
    }

    onBlur($event) {
        let option = this.options.filter(o => o.title == this.inputTitle)[0];
        if (!option) {
            this.inputTitle = this.title;
            return;
        }

        this.setNgModelSingleselect(option);
        this.toggle(false);
        //onsole.log('blur => this.options', this.options);
    }

    onChange(option: IxOptionComponent) {
        if (!option || !option.elem)
            return;

        console.log('comboInputChanged', option);

        this.setNgModelSingleselect(option);
    }

    onComboInputChange($event) {
        console.log('$event', $event);
    }

    onFocus($event) {
        let inputElem = $event.target;
        inputElem.setSelectionRange(0, inputElem.value.length);
    }

    onKeydown($event): void {
        console.warn('$event', [$event]);
        switch ($event.keyCode) {
            case KEYCODE.DOWN:
                this.toggle(true);
                // let values = this.options.map(); //.filter(o => o.value == this.ngModel);
                //
                //
                // this.setNgModelSingleselect(option);
                break;
            default:
                break;
        }
    }

    onInputKeydown($event): void {
        console.warn('$event', [$event]);
        switch ($event.keyCode) {
            case KEYCODE.ENTER:
                this.onBlur($event);
                break;
            default:
                break;
        }
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
