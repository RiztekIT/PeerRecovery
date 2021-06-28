import { TestBed } from '@angular/core/testing';

import { VideocallService } from './videocall.service';

describe('VideocallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideocallService = TestBed.get(VideocallService);
    expect(service).toBeTruthy();
  });
});
