<!--
  Title: ng2select
  Description: Angular 2 bootstrap select directive module
  Author: ng2select
  -->

[![Build Status](https://travis-ci.org/ng2select/bootstrap.svg?branch=master)](https://travis-ci.org/ng2select/bootstrap)

## beta

general-purpose angular2 select/multiselect directive module

http://ng2select.github.io/bootstrap/

### optional config strongly-typed interface

```TypeScript

export interface INg2SelectConfig {
  actionsBox?: boolean;
  style?: string;
  size?: number;
  title?: string;
  liveSearch?: boolean;
  mobile?: boolean;
  multipleSeparator?: string;
  noneSelectedText?: string;
  selectedTextFormat?: string;
  showContent?: boolean;
  width?: string
}

```

### multiselect example (configured primarily in the view)

```HTML

<select [(ngModel)]="selectedOptionIds" multiple>
  <option *ngFor="let option of selectOptions" [value]="option.id">
    {{ option.name }}
  </option>
</select>

```

### singleselect example (similar ui/ux w/practically identical configuration!!)

```HTML

<select [(ngModel)]="selectedOptionId">
  <option *ngFor="let option of selectOptions" [value]="option.id">
    {{ option.name }}
  </option>
</select>

```
