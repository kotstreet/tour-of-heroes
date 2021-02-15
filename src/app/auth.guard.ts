import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable() 
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService,
  private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isLogedIn()) {
      this.router.navigate(['/login']);
    }

    console.log('canactivate method after redirect');
    return this.auth.isLogedIn();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state)
  }
}
