import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { BootstrapPocComponent } from './bootstrap-poc/bootstrap-poc.component';
import { FaPocComponent } from './fa-poc/fa-poc.component';
import { RxjsPocComponent } from './rxjs-poc/rxjs-poc.component';
import { I18nPocComponent } from './i18n-poc/i18n-poc.component';
import { ServerCommService } from './server-comm.service';
import { SsePocComponent } from './sse-poc/sse-poc.component';
import { LoginPocComponent } from './login-poc/login-poc.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { PocComponent } from './poc/poc.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { FilesComponent } from './files/files.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapPocComponent,
    FaPocComponent,
    RxjsPocComponent,
    I18nPocComponent,
    SsePocComponent,
    LoginPocComponent,
    MenuComponent,
    PocComponent,
    HospitalsComponent,
    DepartmentsComponent,
    DoctorsComponent,
    PatientsComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [
    ServerCommService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
