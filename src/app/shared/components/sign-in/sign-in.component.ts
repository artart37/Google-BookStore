import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  perfectCentre: boolean = true;
  showEmailError: boolean = false;
  hintMessage = 'Please input your username to continue';
  errorMessage = 'Username is empty';
  @ViewChild('username', { static: true }) usernameNgmodel!: NgModel;

  constructor(private router: Router) {}

  checkUsernameValidity(): void {
    this.showEmailError = !this.usernameNgmodel.control.valid;
  }

  signinAction(userNameForm: NgForm): void {
    this.router.navigate(['book-store'], {
      queryParams: {
        username: userNameForm.control.value.username,
      },
    });
  }
}
