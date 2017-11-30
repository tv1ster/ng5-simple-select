# Installation

```
npm i ng5-simple-select
```
```js
import {NgSimpleSelectModule} from 'ng5-simple-select';
```

# Usage

If you want just to use select without form, you can just handle change event. It will pass you new value. If value wasn't provided for options, it will pass you what is inside html.  

```
<ng-simple-select [placeholder]="'Select an option'"
                  (change)="onSelectChange($event)">
  <ng-simple-select-option>1</ng-simple-select-option>
  <ng-simple-select-option>2</ng-simple-select-option>
</ng-simple-select>
```

If you want to use all template-driven form, or reactive form, you can use any of these, but previously, add `ngDefaultControl` directive to simple-select

```
<ng-simple-select [(ngModel)]="arrayModel"
                  [displayValue]="arrayModel?.displayValue"
                  name="fieldName"
                  ngDefaultControl>
  <ng-simple-select-option *ngFor="let option of arrayOptions"
                           [value]="option">
    {{option.displayValue}}
  </ng-simple-select-option>
</ng-simple-select>
```

Also, seems, like this module works fine with angular 4, so I will update some peer decencies after testing.

# Gif preview

![alt text](https://github.com/tv1ster/ng5-simple-select/blob/master/test.gif?raw=true "How it is working right now")

# TODO
- Scroll
- Search on typing
- Tab + Arrows + Enter Functionality
