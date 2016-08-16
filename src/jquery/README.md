<!--
  Title: ng2select
  Description: Angular 2 bootstrap select directive module
  Author: ng2select
  -->

[![Build Status](https://travis-ci.org/ng2select/bootstrap.svg?branch=master)](https://travis-ci.org/ng2select/bootstrap)

## beta

general-purpose angular2 combo-select directive module

http://ng2select.github.io/bootstrap/

_powered by:_
https://silviomoreto.github.io/bootstrap-select/

## NG2_SELECT_DIRECTIVES

```HTML

<select class="show-tick" [(ngModel)]="ngModel" multiple data-actions-box="true" data-style="btn-success">
  <option *ngFor="let user of users | async" [value]="user.id">
    {{ user.name }}
  </option>
</select>

```

https://angular.io
