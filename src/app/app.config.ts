import { ApplicationConfig, forwardRef } from '@angular/core';
import { provideRouter } from '@angular/router';
import { userRoutes } from './routes/user.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserAnimationsModule,
    provideRouter(userRoutes),
    provideHttpClient(),
    provideHttpClient(
      withInterceptors([AuthInterceptor]),
    ),
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => MyInputField),
    //   multi: true,
    // }
  
  ]
};



 

