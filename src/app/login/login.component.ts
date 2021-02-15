import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  passwordHide = true;

  constructor(private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    this._snackBar.dismiss()
    console.log(`email = ${email}, password = ${password}`);
    if (!this.email.valid || !this.password.valid)
      return;

    if (this.authService.login(email, password)) {
      this.router.navigate(['']);
    } else {
      this.openSnackBar('Credentials are incorrect');
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minlength') ? 'Enter at least 6 characters' : '';
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, undefined, {
      duration: 10000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: "error-snackcbar",
    });
  }
}
