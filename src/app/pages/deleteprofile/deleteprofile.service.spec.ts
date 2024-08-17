import { TestBed } from '@angular/core/testing';

import { DeleteprofileService } from './deleteprofile.service';

describe('DeleteprofileService', () => {
  let service: DeleteprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
