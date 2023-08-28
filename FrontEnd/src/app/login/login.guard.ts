import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
