import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestsComponent } from './rests/rests.component';
import { RestdetailsComponent } from './restdetails/restdetails.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RestsComponent, RestdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RestsComponent },
      { path: ':uuid', component: RestdetailsComponent }
    ])
  ]
})
export class RestModule { }
