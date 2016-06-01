import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ExampleService } from './example.service';

describe('Demo Service', () => {
  beforeEachProviders(() => [ExampleService]);

  it('should ...',
      inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));
});
