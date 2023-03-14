import { TestBed } from '@angular/core/testing';

import { SpotiyService } from './spotiy.service';

describe('SpotiyService', () => {
  let service: SpotiyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotiyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
