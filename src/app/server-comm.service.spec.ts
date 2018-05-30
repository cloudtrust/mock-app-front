import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ServerCommService } from './server-comm.service';

describe('ServerCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerCommService]
    });
  });

  it('should be created', inject([ServerCommService], (service: ServerCommService) => {
    expect(service).toBeTruthy();
  }));
});
