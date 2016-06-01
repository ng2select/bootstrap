import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DemoService } from './demo.service';

describe('Demo Service', () => {
  beforeEachProviders(() => [DemoService]);

  it('should ...',
      inject([DemoService], (service: DemoService) => {
    expect(service).toBeTruthy();
  }));
});
