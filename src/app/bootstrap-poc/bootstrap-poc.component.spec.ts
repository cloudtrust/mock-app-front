import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPocComponent } from './bootstrap-poc.component';

describe('BootstrapPocComponent', () => {
  let component: BootstrapPocComponent;
  let fixture: ComponentFixture<BootstrapPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
