import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { BootstrapPocComponent } from './bootstrap-poc/bootstrap-poc.component';
import { FaPocComponent } from './fa-poc/fa-poc.component';
import { RxjsPocComponent } from './rxjs-poc/rxjs-poc.component';
import { I18nPocComponent } from './i18n-poc/i18n-poc.component';
import { ServerCommPocService } from './server-comm-poc.service';
import { SsePocComponent } from './sse-poc/sse-poc.component';
import { LoginPocComponent } from './login-poc/login-poc.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapPocComponent,
    FaPocComponent,
    RxjsPocComponent,
    I18nPocComponent,
    SsePocComponent,
    LoginPocComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    ServerCommPocService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
