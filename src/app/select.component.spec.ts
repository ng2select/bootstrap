import {
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ExampleService, ExceptionService } from './shared';
import { SelectAppComponent } from '../app/select.component';

beforeEachProviders(() => [SelectAppComponent, ExampleService, ExceptionService, HTTP_PROVIDERS, provide(XHRBackend, { useClass: MockBackend })]);

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
