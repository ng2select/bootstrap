<!--
  Title: ng2select
  Description: Angular 2 bootstrap select directive module
  Author: ng2select
  -->

[![Build Status](https://travis-ci.org/ng2select/bootstrap.svg?branch=master)](https://travis-ci.org/ng2select/bootstrap)

## beta

general-purpose angular2 bootstrap select/multiselect directive module

http://ng2select.github.io/bootstrap/

 
## bootstrap-single-select

```HTML

            <ix-bootstrap-select (change)="onChange($event)" [(ngModel)]="ngModel">
                <li *ngFor="let option of options | async" [value]="option.id" [title]="option.name">
                    <img [src]="option.gravatarSrc" height="20" width="20" />
                    <span>{{option.name}}</span>
                </li>
            </ix-bootstrap-select>

            <span class="red">{{ngModel | json}}</span>

            <ix-bootstrap-select (change)="onChange($event)" [(ngModel)]="ngModel">
                <li *ngFor="let option of options | async" [value]="option.id" [title]="option.name">
                    <span>{{option.name}}</span>
                </li>
            </ix-bootstrap-select>

            <span class="red">{{ngModel | json}}</span>


```

## bootstrap-multiselect

```HTML

            <ix-bootstrap-select (change)="onChange($event)" [(ngModel)]="ngModelAry" multiple>
                <li *ngFor="let option of options | async" [value]="option.id" [title]="option.name">
                    <img [src]="option.gravatarSrc" height="20" width="20" />
                    <span>{{option.name}}</span>
                </li>
            </ix-bootstrap-select>

            <span class="red">{{ngModelAry | json}}</span>

            <ix-bootstrap-select (change)="onChange($event)" [(ngModel)]="ngModelAry" multiple>
                <li *ngFor="let option of options | async" [value]="option.id" [title]="option.name">
                    <span>{{option.name}}</span>
                </li>
            </ix-bootstrap-select>

            <span class="red">{{ngModelAry | json}}</span>

```

https://angular.io
