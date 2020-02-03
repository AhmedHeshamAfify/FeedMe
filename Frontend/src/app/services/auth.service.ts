import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })

  };

  // headerObject = {
  //   'Content-Type':'application/json',
  //   'userName':''
  // };

  // httpOptions1 = {
  //   headers: new HttpHeaders(this.headerObject)
  // };



  constructor(private http: HttpClient) { }

  RegisterUser(user) : Observable<any> {
    console.log(user);
    // debugger;
      return this.http.post('http://localhost:4000/Users/signUp', user, this.httpOptions );
  }


  authUser(){
    return localStorage.getItem('token');
  }

  LoginUser (user) : Observable<any> {

    return this.http.post('http://localhost:4000/Users/signIn', user);


    }


    getUserByUsername(uName: string){
      return this.http.get<user[]>('http://localhost:8080/User/', {
        params: new HttpParams().set('userName', uName)
      })
  }

}

























    // addQuestion(Questions)  {




    //   let username= localStorage.getItem('username');

    //   this.headerObject.username =JSON.parse(username);
    //   console.log(this.httpOptions1.headers.get('username'));
    //   console.log('data men service' ,Questions);

    //   return this.http.post('http://localhost:8080/Questions/add', Questions,this.httpOptions1);



    //   }

    //   getQuestions() : Observable <Questions>{

    //   let username= JSON.parse(localStorage.getItem('username'));


    //     let params = new HttpParams().set("username",username);

    // return this.http.get<Questions>('http://localhost:8080/User/getQuestions', {params:params});


    //   }


    //   getQuestionById(id) : Observable <Questions>{


    //     let params = new HttpParams().set("id",id);

    //   return this.http.get<Questions>('http://localhost:8080/Questions/getQuestionById', {params:params});








