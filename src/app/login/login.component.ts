import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordHide = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    console.log(`email = ${email}, password = ${password}`);
    this.authService.login(email, password);
  }
}
