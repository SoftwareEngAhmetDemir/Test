import { TestBed } from '@angular/core/testing';

import { LoggaurdGuard } from './loggaurd.guard';

describe('LoggaurdGuard', () => {
  let guard: LoggaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
