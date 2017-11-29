# What is going on

I'm trying just to implement functionality, which will look like standard select from code perspective.  
For more information check out [docs page](https://tv1ster.github.io/ng5-simple-select/)

```js
import {NgSimpleSelectModule} from 'ng5-simple-select';
```  

```html
<ng-simple-select [(ngModel)]="arrayModel"
                  [displayValue]="arrayModel?.displayValue"
                  name="fieldName"
                  ngDefaultControl>
  <ng-simple-select-option *ngFor="let option of arrayOptions"
                           [value]="option">{{option.displayValue}}</ng-simple-select-option>
</ng-simple-select>
```
 
# Installation
```
npm i ng5-simple-select --save
```

# TODO
- Scroll
- Search on typing
- Tab + Arrows + Enter Functionality
