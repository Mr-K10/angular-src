import { TestBed } from '@angular/core/testing';

import { FormsubmitionService } from './formsubmition.service';

describe('FormsubmitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsubmitionService = TestBed.get(FormsubmitionService);
    expect(service).toBeTruthy();
  });
});
