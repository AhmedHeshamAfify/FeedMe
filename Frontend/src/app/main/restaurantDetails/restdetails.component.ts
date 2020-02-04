import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurantService';


@Component({
  selector: 'app-restdetails',
  templateUrl: `./restdetails.component.html`

})
export class RestdetailsComponent implements OnInit {
  restDetails;
  meals;

  constructor(private router: Router, private service:
    RestaurantService) {

  }

  ngOnInit() {
    this.restDetails = this.service.currentRest;
    this.meals = this.restDetails.meals;
  }
  navigate(id) {
    this.router.navigate([""]);

  }

}
