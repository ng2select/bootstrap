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
    ViewChildren
} from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/common';
import { Observable, Subject } from 'rxjs/Rx';
import { IX_DIRECTIVES, IxOptionComponent } from '../core';

const noop = () => { };

const BOOTSTRAP_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => BootstrapSelectComponent),
        multi: true
    });

@Component({
    moduleId: module.id,
    selector: 'ix-bootstrap-select',
    templateUrl: 'bootstrap.component.html',
    styleUrls: ['bootstrap.component.css'],
    directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [BOOTSTRAP_CONTROL_VALUE_ACCESSOR]
})
export class BootstrapSelectComponent implements OnInit, AfterContentInit, ControlValueAccessor {
    @Input() multiple: boolean = false;
    @Input() ngModel: any;
    @Output() ngModelChange = new EventEmitter();
    @Output() change = new EventEmitter();
    @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

    open: boolean = false;
    title: string = "<-- select -->";
    onNgModelTouched: (_: any) => void = noop;
    onNgModelChanged: (_: any) => void = noop;

    constructor() { }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.options.changes.subscribe(options => options.forEach(option => {
            console.log('option', option);
            option.click.subscribe(o => this.onChange(o))
        }));
    }

    onBlur($event) {
        //console.log('blur => this.options', this.options);
    }

    isDropup() {

    }

    isMultiselect() {
        return this.multiple;
    }

    onChange(option: IxOptionComponent) {
        if (!option || !option.elem)
            return;

        if (this.isMultiselect())
            return this.setNgModelMultiselect(option);

        return this.setNgModelSingleselect(option);
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

    setNgModelMultiselect(option: IxOptionComponent) {
        /* Toogle the clicked option's active property using the observable list */
        this.options.filter(o => o.value == option.value).forEach(o => o.active = !o.active);

        let activeOptions: IxOptionComponent[] = this.options.filter(o => o.active);
        let newVals: any[] = activeOptions.map(o => o.value);
        this.onNgModelChanged(newVals);
        this.change.emit(newVals);

        this.setTitleMultiselect(activeOptions);
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

    setTitle(option: IxOptionComponent) {
        console.log('option (setTitle() - bootstrap)', option);
        if (!option || !option.elem)
            return;
        this.title = option.title;
    }

    setTitleMultiselect(activeOptions: IxOptionComponent[]) {
        if (!activeOptions.length)
            return this.title = '<-- select -->';

        if(activeOptions.length <= 2)
          return this.title = activeOptions.map(o => o.title).join(', ');

        return this.title = `${activeOptions.length} selected`;
        //let newVals: any[] = this.options.filter(o => o.active === true).flatMap(project: (value: IxOptionComponent, index: number) => Subscribable<I> | Promise<I> | ArrayLike<I>, resultSelector: (outerValue: IxOptionComponent, innerValue: I, outerIndex: number, innerIndex: number) => R, concurrent?: number).toArray();
        //this.title = newVals.join(',');
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
