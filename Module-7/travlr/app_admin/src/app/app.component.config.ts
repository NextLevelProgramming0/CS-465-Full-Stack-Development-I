import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptProvider, jwtInterceptorFn } from './utils/jwt-interceptor';

import { routes } from './app.component.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptors([jwtInterceptorFn])),
    authInterceptProvider
  ]
};
