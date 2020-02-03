import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { Interceptor } from './interceptors/Interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { RestdetailsComponent } from './main/restaurantDetails/restdetails.component';



@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./auth/auth.module').then(r => r.AuthModule) },
      { path: '', loadChildren: () => import('./main/main.module').then(r => r.MainModule) , canActivate : [AuthGuard]},
      { path: '**', redirectTo: 'home' }]
    )],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
