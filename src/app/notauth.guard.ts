import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';

@Injectable()
export class NotAuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLogedIn()) {
      console.log('user is logged in');
      this.router.navigate(['']);
    }

    console.log('canactivate method after redirect');
    return !this.auth.isLogedIn();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state)
  }
}
