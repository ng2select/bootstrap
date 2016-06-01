import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import { ExampleService } from './example.service';
import { ExceptionService } from './exception.service';

describe('Demo Service', () => {
  beforeEachProviders(() => [ExampleService, ExceptionService, HTTP_PROVIDERS]);

  it('should ...',
      inject([ExampleService], (service: ExampleService) => {
    expect(service).toBeTruthy();
  }));
});
