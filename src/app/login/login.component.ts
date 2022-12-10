import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  my_user = "Username : alisha@gmail.com";
  my_pass = "Password : 1234";
  
  login = new FormGroup(
    {
      email : new FormControl,
      password : new FormControl
    }
  );

  user = [
    {"email" : "alisha@gmail.com", "password" : "1234"},
    {"email" : "alisha1@gmail.com", "password" : "4567"},
    {"email" : "alisha2@gmail.com", "password" : "1234"},
  ]


  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  login_form()
  {
    for(let i = 0; i<this.user.length; i++)
    {
      if (this.login.controls.email.value == this.user[i].email)
      {
        if (this.login.controls.password.value == this.user[i].password)
        {
          this.router.navigate(['/home']);
        }
      }
    }
    
  }
}
