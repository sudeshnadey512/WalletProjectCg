import { TestBed } from '@angular/core/testing';

import { LoginverificationService } from './loginverification.service';

describe('LoginverificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginverificationService = TestBed.get(LoginverificationService);
    expect(service).toBeTruthy();
  });
});
