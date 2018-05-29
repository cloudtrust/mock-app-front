import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HospitalsComponent } from './hospitals.component';
import { ServerCommPocService } from '../server-comm-poc.service';

describe('HospitalsComponent', () => {
  let component: HospitalsComponent;
  let fixture: ComponentFixture<HospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ HospitalsComponent ],
      providers: [ ServerCommPocService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
