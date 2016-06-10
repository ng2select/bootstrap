import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { IxSelectService } from './ix-select.service';

describe('IxSelect Service', () => {
  beforeEachProviders(() => [IxSelectService]);

  it('should ...',
      inject([IxSelectService], (service: IxSelectService) => {
    expect(service).toBeTruthy();
  }));
});
