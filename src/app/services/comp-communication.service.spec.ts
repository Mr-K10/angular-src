import { TestBed } from '@angular/core/testing';

import { CompCommunicationService } from './comp-communication.service';

describe('CompCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompCommunicationService = TestBed.get(CompCommunicationService);
    expect(service).toBeTruthy();
  });
});
