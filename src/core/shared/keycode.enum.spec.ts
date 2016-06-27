import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {KEYCODE} from './keycode.enum';

describe('Keycode', () => {
  it('should create an instance', () => {
    expect(KEYCODE.RIGHT).toBe(39);
  });
});
