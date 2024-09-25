import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { userRoutes } from './routes/user.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(userRoutes),
  ]
};
