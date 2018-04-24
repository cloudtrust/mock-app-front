import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BootstrapPocComponent } from './bootstrap-poc/bootstrap-poc.component';
import { FaPocComponent } from './fa-poc/fa-poc.component';
import { RxjsPocComponent } from './rxjs-poc/rxjs-poc.component';
import { I18nPocComponent } from './i18n-poc/i18n-poc.component';
import { SsePocComponent } from './sse-poc/sse-poc.component';
import { LoginPocComponent } from './login-poc/login-poc.component';
import { ServerCommPocService } from './server-comm-poc.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        BootstrapPocComponent,
        FaPocComponent,
        RxjsPocComponent,
        I18nPocComponent,
        SsePocComponent,
        LoginPocComponent
      ],
      providers: [ 
        ServerCommPocService,
        OAuthService,
        UrlHelperService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Mock Front-end PoC');
  }));
});
