import { TestBed, async, inject } from '@angular/core/testing';

import { SpecializationGuard } from './specialization.guard';

describe('SpecializationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecializationGuard]
    });
  });

  it('should ...', inject([SpecializationGuard], (guard: SpecializationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
