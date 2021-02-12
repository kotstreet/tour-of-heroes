import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users: User[] = [
    { email: 'qwe@qw.qw', password: 'qweqwe' },
    { email: 'asd@as.as', password: 'asdasd' },
  ]

  login(incomeEmail: string, incomePassword: string):string {
    var user = { email: incomeEmail, password: incomePassword };
    if (this.users.includes(user)) {
      this.saveUserCridentials(incomeEmail);
      console.log(`succes log in with email = ${incomeEmail}, pass = ${incomePassword}`);
      return '';
    }
    else {
      console.log(`failed log in with email = ${incomeEmail}, pass = ${incomePassword}`);
      return 'Credentials are incorrect';
    }
  }

  register(incomeEmail: string, incomePassword: string): string {
    var user = { email: incomeEmail, password: incomePassword };
    this.users.push(user);
    let loginRes = this.login(incomeEmail, incomePassword);

    if (loginRes == 'Credentials are incorrect') {
      console.log(`creating new user was failed`);
      return 'creating was failed'
    }
    else {
      console.log(`succes register with email = ${incomeEmail}, pass = ${incomePassword}`);
      return '';
    }
  }

  logout() {
    this.removeUserCridentiials();
  }

  isLogedIn(): boolean {
    let email = localStorage.getItem('email');
    return email == null ? false : true;
  }

  saveUserCridentials(email: string): void {
    localStorage.setItem('email', email);
  }

  removeUserCridentiials(): void {
    localStorage.removeItem('email');
  }
}
