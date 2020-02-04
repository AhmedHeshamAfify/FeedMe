import { Component, OnInit, ElementRef } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { AfterViewInit, ViewChild, Renderer2 } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  msg;
  // @ViewChild('label') label;

  // @ViewChild('label') el: any;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private rd: Renderer2
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ["", Validators.required],

      password: ["", Validators.required]
    });
  }

  login() {
    this.submitted = true;

    const user = {
      email: this.angForm.value.email,
      password: this.angForm.value.password
    };
    this.service.LoginUser(user).subscribe(data => {
      console.log(">>> login response: ", data.token);
      if (data != null) {
        localStorage.setItem("token", data.token);
        if (data.user) {
          this.service.user = data.user
        }
      }
    },
    error => {
      this.msg = "User not found";
    });
    this.router.navigate(["home"]);
  }
}
