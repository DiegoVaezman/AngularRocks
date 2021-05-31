import { TestBed } from '@angular/core/testing';

import { BandsListService } from './bands-list.service';

describe('BandsListService', () => {
  let service: BandsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
