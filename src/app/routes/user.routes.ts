import { Routes } from '@angular/router';
import { SignupComponent } from '../components/user/signup/signup.component';
import { LoginComponent } from '../components/user/login/login.component';

export const userRoutes: Routes = [
    {
        path:'',
        redirectTo:'signup',
        pathMatch: 'full'
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    
];
