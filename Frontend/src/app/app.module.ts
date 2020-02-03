import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'rests', loadChildren: () => import('./rest/rest.module').then(m => m.RestModule) },
      { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }

      // { path: 'rests/:uuid', component: RestdetailsComponent },
      //{ path: 'rests', component: RestdetailsComponent },
      // { path: 'rests/:uuid', component: RestdetailsComponent }
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
