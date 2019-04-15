import { TestBed, async, inject } from '@angular/core/testing';

import { ServiceRegistrationGuard } from './service-registration.guard';

describe('ServiceRegistrationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceRegistrationGuard]
    });
  });

  it('should ...', inject([ServiceRegistrationGuard], (guard: ServiceRegistrationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
