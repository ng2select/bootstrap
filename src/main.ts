import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { SelectAppComponent, environment, ExampleService, ExceptionService } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(SelectAppComponent, [
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    ExampleService,
    ExceptionService
  ]).catch((err: any) => console.error(err));
