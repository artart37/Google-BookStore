import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() isLoggedIn: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  navigateToWishlist(): void {
    this.router.navigate(['wishlist'], {
      queryParams: {
        username: this.route.snapshot.queryParamMap.get('username'),
      },
    });
  }

  refreshApp(): void {
    if (this.isLoggedIn) {
      this.goToDashBoard();
    } else {
      this.logOut();
    }
  }

  private goToDashBoard(): void {
    const username = this.route.snapshot.queryParamMap.get('username');
    this.router.navigate(['book-store/dashboard'], {
      queryParams: {
        username: username,
      },
    });
  }

  logOut(): void {
    this.router.navigateByUrl('/signin');
  }
}
