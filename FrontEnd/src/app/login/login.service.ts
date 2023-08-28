import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInKey = 'loggedIn';
  loggedIn: boolean = false;

  constructor() {
    this.loggedIn = !!localStorage.getItem(this.loggedInKey);
   }

  


  login(username: string, password: string) : boolean{

    // TODO: check database and see if user is registered but for now mocked.
    this.loggedIn = true;
    localStorage.setItem(this.loggedInKey, 'true');
    return this.loggedIn;
  }

  logOut(){
    this.loggedIn = false;
    localStorage.removeItem(this.loggedInKey);
  }

  isLoggedIn() : boolean {
    return this.loggedIn;
  }
}
