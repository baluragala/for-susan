import { TestBed, inject } from '@angular/core/testing';

import { Courses2Service } from './courses2.service';

describe('Courses2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Courses2Service]
    });
  });

  it('should be created', inject([Courses2Service], (service: Courses2Service) => {
    expect(service).toBeTruthy();
  }));
});
