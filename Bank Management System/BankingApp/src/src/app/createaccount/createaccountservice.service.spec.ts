import { TestBed } from '@angular/core/testing';

import { CreateaccountserviceService } from './createaccountservice.service';

describe('CreateaccountserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateaccountserviceService = TestBed.get(CreateaccountserviceService);
    expect(service).toBeTruthy();
  });
});
