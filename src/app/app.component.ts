import { Component } from '@angular/core';
import { smoothappearance } from './shared/animations/general-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [smoothappearance],
})
export class AppComponent {
  title = 'BookStore';
  headersigninsignup: boolean = true;
  centralized!: boolean;

  handler(e: any) {
    //Check if the router outlet has a property named perfectCentre
    //This is to ensure the main section is ideally centralised where the corresponding router component has the perfectCentre property
    e.hasOwnProperty('perfectCentre')
      ? (this.centralized = true)
      : (this.centralized = false);
  }
}
