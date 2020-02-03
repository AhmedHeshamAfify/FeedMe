import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()

export class AuthService {
  constructor(public http: HttpClient) { }

  authUser(){
    return localStorage.getItem('token');
  }
}