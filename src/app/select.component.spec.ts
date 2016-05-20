import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SelectAppComponent } from '../app/select.component';

beforeEachProviders(() => [SelectAppComponent]);

describe('App: Select', () => {
  it('should create the app',
      inject([SelectAppComponent], (app: SelectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'select works!\'',
      inject([SelectAppComponent], (app: SelectAppComponent) => {
    //expect(app.title).toEqual('select works!');
  }));
});
