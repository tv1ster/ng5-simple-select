# What is going on

I'm trying just to implement functionality, which will look like standard select from code perspective.  

```
<ng-simple-select [(ngModel)]="arrayModel" name="anotherName" ngDefaultControl>
  <ng-simple-select-option *ngFor="let option of arrayOptions"
                           [value]="option.value">{{option.displayValue}}</ng-simple-select-option>
</ng-simple-select>
```

The main difference right now, that it should have ngDefaultControl to work properly with template-driven form and reactive from

![alt text](https://github.com/tv1ster/ng5-simple-select/blob/master/test.gif?raw=true "How it is working right now")

# TODO
- Highliting
- Scroll
- Search o typing
- Keypress functionality
- Deploy on npm
- ...
- PROFIT!
