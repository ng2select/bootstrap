import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { IxBuilderService } from './builder.service';

describe('IxSelect Service', () => {
  beforeEachProviders(() => [IxBuilderService]);

  it('should ...',
      inject([IxBuilderService], (service: IxBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
