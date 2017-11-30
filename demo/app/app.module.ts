import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultSelectComponent } from './default-select/default-select.component';

import { NgSimpleSelectModule } from 'ng5-simple-select';


@NgModule({
  declarations: [
    AppComponent,
    DefaultSelectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSimpleSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
