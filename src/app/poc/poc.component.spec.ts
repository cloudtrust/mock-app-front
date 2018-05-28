import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PocComponent } from './poc.component';
import { SsePocComponent } from '../sse-poc/sse-poc.component';
import { LoginPocComponent } from '../login-poc/login-poc.component';
import { RxjsPocComponent } from '../rxjs-poc/rxjs-poc.component';
import { BootstrapPocComponent } from '../bootstrap-poc/bootstrap-poc.component';
import { FaPocComponent } from '../fa-poc/fa-poc.component';
import { I18nPocComponent } from '../i18n-poc/i18n-poc.component';

import { ServerCommPocService } from '../server-comm-poc.service';
import { OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

describe('PocComponent', () => {
  let component: PocComponent;
  let fixture: ComponentFixture<PocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [
        PocComponent,
        SsePocComponent,
        LoginPocComponent,
        RxjsPocComponent,
        BootstrapPocComponent,
        FaPocComponent,
        I18nPocComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      providers: [
        OAuthService,
        UrlHelperService,
        ServerCommPocService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
