import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthMainComponent } from './auth-main/auth-main.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, AuthMainComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModuleModule { }
