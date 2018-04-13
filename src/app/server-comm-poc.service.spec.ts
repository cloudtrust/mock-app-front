import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ServerCommPocService } from './server-comm-poc.service';

describe('ServerCommPocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerCommPocService]
    });
  });

  it('should be created', inject([ServerCommPocService], (service: ServerCommPocService) => {
    expect(service).toBeTruthy();
  }));
});
