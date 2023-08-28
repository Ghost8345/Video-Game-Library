import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}
  

  login(){
    const valid = this.loginService.login(this.username, this.password)
    if (valid){
      console.log("Valid Credentials");
      this.router.navigate(['/home']);
    }
    else{
      alert("Wrong Credentials");
    }
  }



}
