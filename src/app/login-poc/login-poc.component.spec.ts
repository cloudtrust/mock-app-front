import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPocComponent } from './login-poc.component';

describe('LoginPocComponent', () => {
  let component: LoginPocComponent;
  let fixture: ComponentFixture<LoginPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPocComponent ]
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
