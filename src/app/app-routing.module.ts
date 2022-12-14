import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path : "", component : LoginComponent
  },
  {
    path : "login", component : LoginComponent
  },
  { 
    path : "signup", component : SignupComponent
  },
  {
    path : "home", component : HomeComponent
  },
  {
    path : "**", component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
