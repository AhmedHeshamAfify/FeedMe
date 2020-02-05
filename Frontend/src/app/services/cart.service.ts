import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../models/meal';
import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  meals : Meal []= []
  constructor(private http: HttpClient, private authService: AuthService) { }


  addOrder() {
    this.http.post('http://localhost:4000/orders', {meals: this.meals}).subscribe((UpdatedUser: User) => {
      this.authService.user = UpdatedUser
    });
  }
}
