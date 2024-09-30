import { Routes } from '@angular/router';
import { SignupComponent } from '../components/user/signup/signup.component';
import { LoginComponent } from '../components/user/login/login.component';
import { HomeComponent } from '../components/user/home/home.component';
import { CreateArticlesComponent } from '../components/user/create-articles/create-articles.component';

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
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'create',
        component:CreateArticlesComponent
    }

    
];
