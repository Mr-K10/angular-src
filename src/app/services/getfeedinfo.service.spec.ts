import { TestBed } from '@angular/core/testing';

import { GetfeedinfoService } from './getfeedinfo.service';

describe('GetfeedinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfeedinfoService = TestBed.get(GetfeedinfoService);
    expect(service).toBeTruthy();
  });
});
