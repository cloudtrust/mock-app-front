import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nPocComponent } from './i18n-poc.component';

describe('I18nPocComponent', () => {
  let component: I18nPocComponent;
  let fixture: ComponentFixture<I18nPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
