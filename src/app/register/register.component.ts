import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordHide = true;
  confirmHide = true;

  constructor(private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  register(email: string, password: string, confirmation: string): void {
    this._snackBar.dismiss()
    console.log(`email = ${email}, password = ${password}, confirm = ${confirmation}`);

    if (!this.isValid(email, password, confirmation))
      return;

    if (this.authService.register(email, password)) {
      this.router.navigate(['']);
    } else {
      this.openSnackBar('creating was failed');
    }
  }

  isValid(email: string, password: string, confirmation: string): boolean {
    if (email.indexOf('@') < 0) {
      this.openSnackBar('email is encorrect...');
      return false;
    }

    if (password.length < 6) {
      this.openSnackBar('password should contain at least 6 characters');
      return false;
    }

    if (password != confirmation) {
      this.openSnackBar('password and confirmation are not equals');
      return false;
    }

    return true;
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
