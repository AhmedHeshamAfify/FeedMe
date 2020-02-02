import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resturants = [{name : "Mac", description :"desc"},{name : "Emperial", description :"desc"}]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(id){
    this.router.navigate(["register"]);
  }

}
