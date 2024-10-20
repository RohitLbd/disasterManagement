import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { 
        path: 'register', component: RegisterComponent,
    },
    { 
        path: 'login', component: LoginComponent,
    },
    // { 
    //     path: 'about', component: AboutComponent,
    //     children: [
    //         {path: 'rating', outlet:'rate', component:RatingComponent},
    //         {path: 'feedback', outlet:'feed', component:FeedbackComponent}
    //     ]
    // }
];
