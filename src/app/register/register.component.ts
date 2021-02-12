import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordHide = true;
  confirmHide = true;

  constructor() { }

  ngOnInit(): void {
  }

  register(email: string, password: string, confirmation: string): void {
    console.log(`email = ${email}, password = ${password}, confirm = ${confirmation}`);
  }

}
