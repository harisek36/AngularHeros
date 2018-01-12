import { TestBed, inject } from '@angular/core/testing';

import { VehicleServices } from './vehicle-service.service';

describe('VehicleServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleServices]
    });
  });

  it('should be created', inject([VehicleServices], (service: VehicleServices) => {
    expect(service).toBeTruthy();
  }));
});
