import { TestBed } from '@angular/core/testing';

import { FundtransferService } from './fundtransfer.service';

describe('FundtransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundtransferService = TestBed.get(FundtransferService);
    expect(service).toBeTruthy();
  });
});
