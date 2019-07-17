import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    {
      if (localStorage.getItem("var") === "1") {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }


  }
}
