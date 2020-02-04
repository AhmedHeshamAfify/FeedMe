import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    currentRest = {
        name: "McDonald's",
        desc: "Rest1 Desc",
        cuisine: "Americain",
        meals: [{ name: "meal1", type: "beef", price: "10 $", image: "assets/images/food1.jpg" },
        { name: "meal2", type: "vegan", price: "11$", image: "assets/images/food2.jpg" },
        { name: "meal3", type: "vegetarian", price: "12$", image: "assets/images/food3.jpg", }
            , { name: "meal4", type: "beef", price: "15$", image: "assets/images/food4.jpg" }
            , { name: "meal5", type: "beef", price: "10$", image: "assets/images/food4.jpg" }]
    };
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })

    };

    getNearestResturants(coords): Observable<any> {
        console.log(coords);
        // debugger;
        return this.http.post('http://localhost:4000/rests/nearest', coords, this.httpOptions);
    }

    getAllRestaurants() {
        return this.http.get('http://localhost:4000/rests', this.httpOptions);
    }

}