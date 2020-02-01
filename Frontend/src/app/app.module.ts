import { RestdetailsComponent } from './rest/restdetails/restdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UniqueUsernameValidatorDirective } from './shared/unique-username-validator.directive';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UniqueUsernameValidatorDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShowHidePasswordModule,
    RouterModule.forRoot([
      { path: 'rests', loadChildren: () => import('./rest/rest.module').then(module => module.RestModule) }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
