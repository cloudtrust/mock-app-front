import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FaPocComponent } from './fa-poc.component';

describe('FaPocComponent', () => {
  let component: FaPocComponent;
  let fixture: ComponentFixture<FaPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaPocComponent ],
	    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
