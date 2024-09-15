import { TestBed } from '@angular/core/testing';

import { FilterCarService } from './filter-car.service';

describe('FilterCarService', () => {
  let service: FilterCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
