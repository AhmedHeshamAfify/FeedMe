import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, Data } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurantService';


@Component({
  selector: 'app-restdetails',
  templateUrl: `./restdetails.component.html`

})
export class RestdetailsComponent implements OnInit {
  restDetails = {
    name: "McDonald's",
    desc: "Rest 1 Desc",
    cuisine: "Americain",
    meals: [{ name: "meal1", type: "beef", price: "10 $" }, { name: "meal2", type: "vegan", price: "11$" }, { name: "meal3", type: "vegetarian", price: "12$" }
      , { name: "meal4", type: "beef", price: "15$" }, { name: "meal5", type: "beef", price: "10$" }],
    address: "1234 Some St San Francisco, CA 94102, US 1.800.123.4567",
    phone: "641-334-8722",
    image: "1"
  }
  constructor(private router: Router, private route: ActivatedRoute, private restaurantService: RestaurantService) { }
  mealsGroupedByType;
  restaurant
  ngOnInit() {
    this.restaurant = history.state.data
    if (!this.restaurant) {
      this.mealsGroupedByType = this.restaurantService.
        getAllSelectedRestaurantMealsGroupedByType(this.restaurant)
    }

  }
  navigate(id) {
    this.router.navigate([""]);
  }



}
