import { TestBed } from '@angular/core/testing';

import { UpdatedCarService } from './updated-car.service';

describe('UpdatedCarService', () => {
  let service: UpdatedCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
