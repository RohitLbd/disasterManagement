import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { GuiComponent } from './page2/gui/gui.component';

export const routes: Routes = [
  { 
    path: '', component: LandingPageComponent,
},
  { 
    path: 'register', component: RegisterComponent,
},
{ 
    path: 'login', component: LoginComponent,
},
{ 
  path: 'page1', component: Page1Component,
},
{ 
  path: 'page2', component: Page2Component,
},
{ 
  path: 'gui', component: GuiComponent
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
