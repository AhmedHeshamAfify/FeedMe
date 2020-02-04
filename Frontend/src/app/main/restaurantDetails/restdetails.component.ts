import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restdetails',
  templateUrl: `./restdetails.component.html`

})
export class RestdetailsComponent implements OnInit {
  restDetails = {
    name: "McDonald's",
    desc: "Rest1 Desc",
    cuisine: "Americain",
    meals: [{ name: "meal1", type: "beef", price: "10 $" }, { name: "meal2", type: "vegan", price: "11$" }, { name: "meal3", type: "vegetarian", price: "12$" }
      , { name: "meal4", type: "beef", price: "15$" }, { name: "meal5", type: "beef", price: "10$" }],
    address: "1234 Some St San Francisco, CA 94102, US 1.800.123.4567",
    phone: "641-334-8722",
    image: "1"
  }
  meals = this.restDetails.meals;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(id) {
    this.router.navigate([""]);
  }

}
