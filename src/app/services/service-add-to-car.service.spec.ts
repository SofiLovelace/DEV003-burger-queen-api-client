import { TestBed } from '@angular/core/testing';

import { ServiceAddToCarService } from './service-add-to-car.service';

describe('ServiceAddToCarService', () => {
  let service: ServiceAddToCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAddToCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
