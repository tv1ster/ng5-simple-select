import { Injectable } from '@angular/core';

@Injectable()
export class ParentChildService {
  private parentChangeMap = new WeakMap();

  constructor() { }

  public setParenChangeEvent(el: HTMLElement, fn: Function): void {
    this.parentChangeMap.set(el, fn);
  }

  public getParentOnChangeFn(el: HTMLElement): Function {
    return this.parentChangeMap.get(el);
  }

}
