import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPocComponent } from './rxjs-poc.component';

describe('RxjsPocComponent', () => {
  let component: RxjsPocComponent;
  let fixture: ComponentFixture<RxjsPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
