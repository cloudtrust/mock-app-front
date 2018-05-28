import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginPocComponent } from './login-poc.component';
import { OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

describe('LoginPocComponent', () => {
  let component: LoginPocComponent;
  let fixture: ComponentFixture<LoginPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ LoginPocComponent ],
      providers: [ OAuthService, UrlHelperService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
