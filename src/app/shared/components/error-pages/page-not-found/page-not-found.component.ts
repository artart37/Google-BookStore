import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  errorImageSource: string = '/assets/images/473X321/404.png';
  perfectCentre: boolean = true;

  constructor(private location: Location, private router: Router) {}
  backLocation() {
    try {
      this.location.back();
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }
}
