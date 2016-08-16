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

## combo-select

```HTML

<ix-combo-select (change)="onChange($event)" [(ngModel)]="ngModel">
    <li *ngFor="let option of options | async" [value]="option.id" [title]="option.name">
        <img [src]="option.gravatarSrc" height="20" width="20" />
        <span>{{option.name}}</span>
    </li>
</ix-combo-select>

<span class="red">{{ngModel | json}}</span>

<ix-combo-select (change)="onChange($event)" [(ngModel)]="ngModel">
    <li *ngFor="let option of options | async" [value]="option.id" [title]="option.name">
        <img [src]="option.gravatarSrc" height="20" width="20" />
        <span>{{option.name}}</span>
    </li>
</ix-combo-select>

<span class="red">{{ngModel | json}}</span>

```

https://angular.io
