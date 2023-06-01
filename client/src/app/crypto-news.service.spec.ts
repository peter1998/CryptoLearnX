import { TestBed } from '@angular/core/testing';

import { CryptoNewsService } from './crypto-news.service';

describe('CryptoNewsService', () => {
  let service: CryptoNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
