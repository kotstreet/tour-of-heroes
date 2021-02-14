import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

  constructor(private auth: AuthService,
    private router: Router) {
  }

  getPathname(): string {
    return window.location.pathname;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  isLogedIn(): boolean {
    return this.auth.isLogedIn();
  }

  isLogedOut(): boolean {
    return !this.isLogedIn();
  }
}
