import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { BookCommunicationService } from 'src/app/ui-components/book-store/services/book-communication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  perfectCentre: boolean = true;
  showEmailError: boolean = false;
  hintMessage = 'Please input your username to continue';
  errorMessage = 'Username is empty';
  signedIn: boolean = false;
  @ViewChild('username', { static: true }) usernameNgmodel!: NgModel;

  constructor(
    private router: Router,
    private bookCommunicationService: BookCommunicationService
  ) {}

  ngOnInit(): void {
    this.bookCommunicationService.resetWishList();
  }
  checkUsernameValidity(): void {
    this.showEmailError = !this.usernameNgmodel.control.valid;
  }

  signInAction(userNameForm: NgForm): void {
    this.router.navigate(['book-store/dashboard'], {
      queryParams: {
        username: userNameForm.control.value.username,
      },
    });
  }
}
