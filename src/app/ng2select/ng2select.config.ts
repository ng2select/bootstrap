export class Ng2SelectConfig implements INg2SelectConfig {
  public size: number = 4;
  public selectedTextFormat: string = 'count > 2';
}

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