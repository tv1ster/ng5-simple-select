import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSimpleSelectComponent } from './ng-simple-select/ng-simple-select.component';
import { NgSimpleSelectOptionComponent } from './ng-simple-select-option/ng-simple-select-option.component';

export { NgSimpleSelectComponent } from './ng-simple-select/ng-simple-select.component';
export { NgSimpleSelectOptionComponent } from './ng-simple-select-option/ng-simple-select-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgSimpleSelectComponent,
    NgSimpleSelectOptionComponent
  ],
  exports: [
    NgSimpleSelectComponent,
    NgSimpleSelectOptionComponent
  ]
})
export class NgSimpleSelectModule {}
