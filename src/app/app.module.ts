import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { GuiComponent } from './page2/gui/gui.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page1Component,
    Page2Component,
    GuiComponent,
    NavbarComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
  ]
})
export class AppModule { }
