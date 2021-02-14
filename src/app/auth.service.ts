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

  login(incomeEmail: string, incomePassword: string): boolean {
    var user: User = { email: incomeEmail, password: incomePassword };
    if (this.isUserExist(user)) {
      this.saveUserCridentials(incomeEmail);
      console.log(`succes log in with email = ${incomeEmail}, pass = ${incomePassword}`);
      return true;
    }
    else {
      console.log(`failed log in with email = ${incomeEmail}, pass = ${incomePassword}`);
      return false;
    }
  }

  register(incomeEmail: string, incomePassword: string): boolean {
    var user: User = { email: incomeEmail, password: incomePassword };
    this.users.push(user);
    console.log(this.users);

    if (this.login(incomeEmail, incomePassword)) {
      console.log(`succes register with email = ${incomeEmail}, pass = ${incomePassword}`);
      return true;
    }
    else {
      console.log(`creating new user was failed`);
      return false;
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

  isUserExist(user: User): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == user.email && this.users[i].password == user.password) {
        console.log(`there is user with email = ${user.email}, pass = ${user.password}`);
        return true;
      }
    }

    console.log(`there is not user with email = ${user.email}, pass = ${user.password}`);
    return false;
  }
}
