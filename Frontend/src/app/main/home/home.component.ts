import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurantService';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Restaurant } from 'src/app/models/restaurant';
import { AuthService } from 'src/app/services/auth.service';
import { PersistenceService } from 'angular-persistence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  restaurants : Observable<Restaurant>;
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

  navigate(restaurant) {
    this.restaurantService.insertInCach('restaurant',restaurant)
    this.router.navigate(['rest']);
    
  }

}
