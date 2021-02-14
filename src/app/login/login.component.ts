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
  passwordHide = true;

  constructor(private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    this._snackBar.dismiss()
    console.log(`email = ${email}, password = ${password}`);

    if (this.authService.login(email, password)) {
      this.router.navigate(['']);
    } else {
      this.openSnackBar('Credentials are incorrect');
    }
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
