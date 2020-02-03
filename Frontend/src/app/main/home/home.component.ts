import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurantService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  restaurants;
  constructor(private router: Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getAllRestaurantByPosition();
  }

  getAllRestaurantByPosition(){
      navigator.geolocation.getCurrentPosition(resp => {
        const coords = [resp.coords.longitude, resp.coords.latitude];
        this.restaurants = this.restaurantService.getNearestResturants(coords)
        
      }, () => {
        this.restaurants = this.restaurantService.getAllRestaurants()
      });
  }

  navigate() {
    this.router.navigate(["register"]);
  }

}
