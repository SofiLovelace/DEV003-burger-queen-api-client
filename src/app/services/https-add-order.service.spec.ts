import { TestBed } from '@angular/core/testing';

import { HttpsAddOrderService } from './https-add-order.service';

describe('HttpsAddOrderService', () => {
  let service: HttpsAddOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsAddOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
