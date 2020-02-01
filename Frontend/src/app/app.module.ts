import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { Interceptor } from './interceptors/Interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path : '' ,
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)}]),
    FormsModule,
    HttpClientModule
  ],

  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: Interceptor,
  //   multi: true
  // }, AuthGuard, AuthService

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
