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
import { COMMON_DIRECTIVES, COMMON_PIPES, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { IX_DIRECTIVES, IxOptionComponent } from '../core';

const noop = () => { };

const COMBO_CONTROL_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {
        useExisting: forwardRef(() => ComboSelectComponent),
        multi: true
    });

@Component({
    moduleId: module.id,
    selector: 'ix-combo-select',
    templateUrl: 'combo.component.html',
    styleUrls: ['combo.component.css'],
    directives: [COMMON_DIRECTIVES, IX_DIRECTIVES],
    pipes: [COMMON_PIPES],
    providers: [COMBO_CONTROL_VALUE_ACCESSOR]
})
export class ComboSelectComponent implements OnInit, AfterContentInit, ControlValueAccessor {
    @Input() ngModel: any;
    @Output() ngModelChange = new EventEmitter();
    @Output() change = new EventEmitter();
    @ContentChildren(IxOptionComponent) options: QueryList<IxOptionComponent>;

    open: boolean = false;
    inputTitle: string;
    onNgModelTouched: (_: any) => void = noop;
    onNgModelChanged: (_: any) => void = noop;

    private _title: string;

    //get accessor
    get title(): string { return this._title; };

    //set accessor including set inputTitle
    set title(newVal: string) {
        if (newVal !== this._title) {
            this._title = newVal;
            this.inputTitle = newVal;
        }
    }

    constructor() { }

    ngOnInit() {

    }

    ngAfterContentInit() {
        this.options.changes.subscribe(options => options.forEach(option => {
            console.log('option', option);
            option.click.subscribe(o => this.onChange(o))
        }));
    }

    onChange(option: IxOptionComponent) {
        if (!option || !option.elem)
            return;

        console.log('comboInputChanged', option);

        this.setNgModelSingleselect(option);
    }

    onComboInputChange($event) {

    }

    isDropup(){
      
    }

    onBlur($event) {
        let option = this.options.filter(o => o.title == this.inputTitle)[0];
        if (!option) {
            this.inputTitle = this.title;
            return;
        }

        this.setNgModelSingleselect(option);
        //onsole.log('blur => this.options', this.options);
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
