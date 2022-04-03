import { Directive, Input } from '@angular/core';
import { ItemModel } from './item-model';

@Directive()
export abstract class BaseItem {
  @Input()
  public data: ItemModel;

  protected constructor() {}
}
