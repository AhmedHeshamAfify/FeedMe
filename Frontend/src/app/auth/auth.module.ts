import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UniqueUsernameValidatorDirective } from '../shared/unique-username-validator.directive'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ShowHidePasswordModule,
    //UniqueUsernameValidatorDirective,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
