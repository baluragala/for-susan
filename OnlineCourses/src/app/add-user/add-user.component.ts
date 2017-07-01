import { User } from "./../../user.interface";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  user = {
    firstName:'bala',
    lastName:'ragala',
    address:{
      zip:11111,
      city:'city1'
    }
  }
  userForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3)
      ]),
      lastName: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        zip: new FormControl(),
        city: new FormControl()
      })
    });

    this.userForm.patchValue(this.user)
  }

  saveUser() {
    console.log(this.userForm);
  }
}
