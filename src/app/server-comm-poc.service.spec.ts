import { TestBed, inject } from '@angular/core/testing';

import { ServerCommPocService } from './server-comm-poc.service';

describe('ServerCommPocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerCommPocService]
    });
  });

  it('should be created', inject([ServerCommPocService], (service: ServerCommPocService) => {
    expect(service).toBeTruthy();
  }));
});
