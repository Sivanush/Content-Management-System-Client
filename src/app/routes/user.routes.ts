import { Routes } from '@angular/router';
import { SignupComponent } from '../components/user/signup/signup.component';
import { LoginComponent } from '../components/user/login/login.component';
import { HomeComponent } from '../components/user/home/home.component';
import { CreateArticlesComponent } from '../components/user/create-articles/create-articles.component';
import { publicGuard } from '../guards/public.guard';
import { authGuard } from '../guards/auth.guard';
import { ListArticlesComponent } from '../components/user/list-articles/list-articles.component';
import { ArticlePageComponent } from '../components/user/article-page/article-page.component';

export const userRoutes: Routes = [
    // {
    //     path:'',
    //     redirectTo:'/signup',
    //     pathMatch: 'full'
    // },
    {
        path:'signup',
        component:SignupComponent,
        canActivate:[publicGuard]
    },
    {
        path:'login',
        component:LoginComponent,
        canActivate:[publicGuard]

    },
    {
        path:'',
        component:HomeComponent,
        canActivate:[authGuard]

    },
    {
        path:'create',
        component:CreateArticlesComponent,
        canActivate:[authGuard]

    },
    {
        path:'articles',
        component:ListArticlesComponent,
        canActivate:[authGuard]

    },
    {
        path:'articles/:id',
        component:ArticlePageComponent,
        canActivate:[authGuard]
    }

    
];
