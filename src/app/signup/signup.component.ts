import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message : any;

  sign_up = new FormGroup(
    {
      name : new FormControl,
      email : new FormControl,
      password : new FormControl
    }
  )
  
  email : any;
  password : any;

  users = [
    { }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sign_up_form()
  {
    this.users.push({"email" : this.sign_up.controls.email.value, "password" : this.sign_up.controls.password.value});
    console.log(this.users);
  }
}
