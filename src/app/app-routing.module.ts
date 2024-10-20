import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { 
    path: 'register', component: RegisterComponent,
},
{ 
    path: 'login', component: LoginComponent,
},
  // { path: 'page2', component: Page2Component,
  //   children:[
  //     { path: 'page21', component: Page21Component},
  //     { path: 'page22', component: Page22Component}
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
