import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsePocComponent } from './sse-poc.component';

describe('SsePocComponent', () => {
  let component: SsePocComponent;
  let fixture: ComponentFixture<SsePocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsePocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
