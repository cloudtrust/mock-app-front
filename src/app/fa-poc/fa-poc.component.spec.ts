import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaPocComponent } from './fa-poc.component';

describe('FaPocComponent', () => {
  let component: FaPocComponent;
  let fixture: ComponentFixture<FaPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaPocComponent ]
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
