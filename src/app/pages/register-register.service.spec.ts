import { TestBed } from '@angular/core/testing';

import { RegisterRegisterService } from './register-register.service';

describe('RegisterRegisterService', () => {
  let service: RegisterRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
