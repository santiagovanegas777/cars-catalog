import { TestBed } from '@angular/core/testing';

import { DeleteCarsService } from './delete-cars.service';

describe('DeleteCarsService', () => {
  let service: DeleteCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
