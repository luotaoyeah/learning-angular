import { TestBed } from '@angular/core/testing';

import { LearningAngularLibService } from './learning-angular-lib.service';

describe('LearningAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningAngularLibService = TestBed.inject(LearningAngularLibService);
    expect(service).toBeTruthy();
  });
});
