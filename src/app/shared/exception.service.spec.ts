import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ExceptionService } from './exception.service';

describe('Exception Service', () => {
  beforeEachProviders(() => [ExceptionService]);

  it('should ...',
      inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));
});
