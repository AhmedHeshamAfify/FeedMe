import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { RestdetailsComponent } from './restaurantDetails/restdetails.component';



@NgModule({
  declarations: [MainComponent, HomeComponent, RestdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
        { path: 'home', component: HomeComponent },
        { path: 'rest', component: RestdetailsComponent }
      ]
      }])
  ]
})

export class MainModule { }
