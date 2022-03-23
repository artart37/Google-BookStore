import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { smoothappearance } from './shared/animations/general-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [smoothappearance],
})
export class AppComponent {
  isLoggedIn: boolean = false;
  title = 'BookStore';
  headersigninsignup: boolean = true;
  centralized!: boolean;

  constructor(private router: Router) {
    router.events
      .pipe(
        filter((e): e is NavigationEnd => {
          return e instanceof NavigationEnd;
        })
      )
      .subscribe(() => {
        this.isLoggedIn = !!(
          router.routerState.snapshot.root.queryParamMap.has('username') &&
          router.routerState.snapshot.root.queryParamMap.get('username')
        );
      });
  }

  handler(e: any) {
    //Check if the router outlet has a property named perfectCentre
    //This is to ensure the main section is ideally centralised where the corresponding router component has the perfectCentre property
    e.hasOwnProperty('perfectCentre')
      ? (this.centralized = true)
      : (this.centralized = false);
  }
}
