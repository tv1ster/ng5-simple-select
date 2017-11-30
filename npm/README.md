# ng5-simple-select

Simple select for Angular 5, still working on it. You can check docs [here](https://tv1ster.github.io/ng5-simple-select/).

## Usage:

This is some simple example of this select

```js
import {NgSimpleSelectModule} from 'ng5-simple-select';
```  

```html
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
