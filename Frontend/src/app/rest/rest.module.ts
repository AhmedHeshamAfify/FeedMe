import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestdetailsComponent } from './restdetails/restdetails.component';
import { RestsComponent } from './rests/rests.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RestsComponent, RestdetailsComponent],
  imports: [
    CommonModule,
    RouterModule,

    RouterModule.forChild([
      { path: '', component: RestdetailsComponent },
      { path: ':uuid', component: RestsComponent }

    ])
  ]
})
export class RestModule { }
