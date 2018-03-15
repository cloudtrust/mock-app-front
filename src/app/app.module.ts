import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { BootstrapPocComponent } from './bootstrap-poc/bootstrap-poc.component';
import { FaPocComponent } from './fa-poc/fa-poc.component';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapPocComponent,
    FaPocComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
