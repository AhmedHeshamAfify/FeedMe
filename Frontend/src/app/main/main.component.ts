import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  user : User
  
  ngOnInit(): void {
    this.user = this.authService.user
  }

  title = 'FeedMe';

  constructor(private router: Router, private authService: AuthService) { }

  logout() {

    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }


}

