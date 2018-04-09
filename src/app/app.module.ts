import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { BootstrapPocComponent } from './bootstrap-poc/bootstrap-poc.component';
import { FaPocComponent } from './fa-poc/fa-poc.component';
import { RxjsPocComponent } from './rxjs-poc/rxjs-poc.component';
import { I18nPocComponent } from './i18n-poc/i18n-poc.component';
import { ServerCommPocService } from './server-comm-poc.service';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapPocComponent,
    FaPocComponent,
    RxjsPocComponent,
    I18nPocComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [ServerCommPocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
