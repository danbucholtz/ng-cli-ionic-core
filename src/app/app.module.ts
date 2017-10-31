import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavDirective } from './nav-directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PageOneComponent } from './page-one';
import { PageTwoComponent } from './page-two';
import { PageThreeComponent } from './page-three';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    NavDirective,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
