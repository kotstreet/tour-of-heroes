import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmation = new FormControl('', [Validators.required]);

  passwordHide = true;
  confirmHide = true;

  constructor(private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  register(): void {
    this._snackBar.dismiss()
    console.log(`email = ${this.email.value}, password = ${this.password.value}, confirm = ${this.confirmation.value}`);

    if (!this.email.valid || !this.password.valid || !this.confirmation.valid || !this.isValid())
      return;

    if (this.authService.register(this.email.value, this.password.value)) {
      this.router.navigate(['']);
    } else {
      this.openSnackBar('creating was failed');
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

    return this.password.hasError('minlength' ) ? 'Enter at least 6 characters' : '';
  }

  getConfirmErrorMessage() {
    return this.confirmation.hasError('required') ? 'You must enter a value' : '';
  }

  isValid(): boolean {
    if (this.password != this.confirmation) {
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
