import { TestBed } from '@angular/core/testing';

import { CreatedcarsService } from './createdcars.service';

describe('CreatedcarsService', () => {
  let service: CreatedcarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedcarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
