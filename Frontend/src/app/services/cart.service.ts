import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../models/meal';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { RestaurantService } from './restaurantService';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient, private authService: AuthService, private restaurantService: RestaurantService) { }

  getMealsFromCache(){
    return this.restaurantService.getFromCache('meal') 
  }
  addOrder(meals) {
    this.http.post('http://localhost:4000/orders', {meals: meals}).subscribe((UpdatedUser: User) => {
      this.authService.user = UpdatedUser
    });
  }
}
