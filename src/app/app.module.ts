import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultSelectComponent } from './default-select/default-select.component';
import { NgSimpleSelectComponent } from './ng-simple-select/ng-simple-select.component';
import { NgSimpleSelectOptionComponent } from './ng-simple-select-option/ng-simple-select-option.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultSelectComponent,
    NgSimpleSelectComponent,
    NgSimpleSelectOptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NgSimpleSelectComponent,
    NgSimpleSelectOptionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
