import { TestBed, inject } from '@angular/core/testing';

import { CourseActiveGaurdService } from './course-active-gaurd.service';

describe('CourseActiveGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseActiveGaurdService]
    });
  });

  it('should be created', inject([CourseActiveGaurdService], (service: CourseActiveGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
