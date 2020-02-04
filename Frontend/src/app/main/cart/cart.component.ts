import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) { }
  meals : Meal[];
  ngOnInit() {
    this.meals = this.cartService.meals
  }

  proccedToPayment(){
    this.cartService.addOrder()
  }

}
