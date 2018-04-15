import { TestBed, inject } from '@angular/core/testing';

import { GeruService } from './geru.service';

describe('GeruService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeruService]
    });
  });

  it('should be created', inject([GeruService], (service: GeruService) => {
    expect(service).toBeTruthy();
  }));
});
