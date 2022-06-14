import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { FirstComponent } from './first/first.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FirstComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
