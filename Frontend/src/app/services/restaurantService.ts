import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })

    };

    getNearestResturants(coords): Observable<any> {
        console.log(coords);
        // debugger;
        return this.http.post('http://localhost:4000/rests/nearest', coords , this.httpOptions);
    }

    getAllRestaurants(){
        return this.http.get('http://localhost:4000/rests' , this.httpOptions);
    }

}