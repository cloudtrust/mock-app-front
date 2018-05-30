import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RxjsPocComponent } from './rxjs-poc.component';
import { ServerCommService } from '../server-comm.service';

describe('RxjsPocComponent', () => {
  let component: RxjsPocComponent;
  let fixture: ComponentFixture<RxjsPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ RxjsPocComponent ],
      providers: [ ServerCommService ]
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
