import { RestdetailsComponent } from './rest/restdetails/restdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { Interceptor } from './interceptors/Interceptor';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path : '' , loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path : '' ,loadChildren : () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'rests', loadChildren: () => import('./rest/rest.module').then(module => module.RestModule) }
  ])],

  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: Interceptor,
  //   multi: true
  // }, AuthGuard, AuthService

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
