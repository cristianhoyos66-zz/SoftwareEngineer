import { TestBed } from '@angular/core/testing';

import { AssessmentResultsService } from './assessment-results.service';

describe('AssessmentResultsService', () => {
  let service: AssessmentResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
