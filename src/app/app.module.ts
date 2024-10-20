import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgApexchartsModule,
  ]
})
export class AppModule { }
