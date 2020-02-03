import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DbServicesService } from "../../services/db-services.service";
import { uniqueUsernameValidator } from "../../shared/unique-username-validator.directive";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  // @Input() user = {username:'' , email:'' , password: ''};
  constructor(private fb: FormBuilder, private service: DbServicesService) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }

  // This method to validate  the confirm password
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  createForm() {
    this.angForm = this.fb.group(
      {
        userName: [
          "",
          Validators.required, // sync validator
          uniqueUsernameValidator(this.service) //async validator
        ],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmpassword: ["", Validators.required]
      },
      { validator: this.MustMatch("password", "confirmpassword") }
    );
  }

  register() {
    this.submitted = true;
    this.service.RegisterUser(this.angForm.value).subscribe(data => {
      localStorage.setItem("token", data.token);
    });
  }
}
