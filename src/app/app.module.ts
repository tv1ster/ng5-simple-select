import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultSelectComponent } from './default-select/default-select.component';
import { Ng5SimpleSelectDirective } from './ng5-simple-select/ng5-simple-select.directive';
import { Ng5SimpleSelectOptionDirective } from './ng5-simple-select-option/ng5-simple-select-option.directive';
import { Ng5SimpleSelectInputComponent } from './ng5-simple-select-input/ng5-simple-select-input.component';
import { Ng5SimpleSelectDropdownComponent } from './ng5-simple-select-dropdown/ng5-simple-select-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultSelectComponent,
    Ng5SimpleSelectDirective,
    Ng5SimpleSelectOptionDirective,
    Ng5SimpleSelectInputComponent,
    Ng5SimpleSelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    Ng5SimpleSelectInputComponent,
    Ng5SimpleSelectDropdownComponent
  ]
})
export class AppModule { }
