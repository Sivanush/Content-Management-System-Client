import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { userRoutes } from './routes/user.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserAnimationsModule,
    provideRouter(userRoutes),
    provideHttpClient()
  ]
};
