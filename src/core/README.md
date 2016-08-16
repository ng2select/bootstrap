<!--
  Title: ng2select
  Description: Angular 2 bootstrap select directive module
  Author: ng2select
  -->

[![Build Status](https://travis-ci.org/ng2select/bootstrap.svg?branch=master)](https://travis-ci.org/ng2select/bootstrap)

## beta

general-purpose angular2 select/multiselect directive module

http://ng2select.github.io/bootstrap/

_powered by:_
https://silviomoreto.github.io/bootstrap-select/

## select-builder-component

```HTML

<ix-select-builder (toggle)="toggle($event)" [open]="open" class="btn-group bootstrap-select show-tick" [ngClass]="{'open': open, 'dropup': isDropup()}" (keydown)="onKeydown($event)">

    <ix-display>
        <input type="text" class="filter-option pull-left col-sm-10" (blur)="onBlur($event)" (change)="onComboInputChange($event)" (focus)="onFocus($event)" (keydown)="onInputKeydown($event)" [(ngModel)]="inputTitle" />

        <span (click)="toggle(!open)" class="btn btn-default col-sm-2">
            <span class="bs-caret"><span class="caret"></span></span>
        </span>
    </ix-display>

    <div class="dropdown-menu" [class.open]="open">

      <ul class="dropdown-menu inner" style="max-height: 104px; overflow-y: auto;">
        <ng-content></ng-content>
      </ul>

    </div>

</ix-select-builder>

```

https://angular.io
