## beta

general-purpose angular2 select/multiselect directive module

http://ng2select.github.io/bootstrap/

```TypeScript

export interface ISelectConfig {
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

```HTML

<select [(ngModel)]="selectedOptionId" multiple>
  <option *ngFor="let option of selectOptions" [value]="option.id">
    {{ option.name }}
  </option>
</select>

```
