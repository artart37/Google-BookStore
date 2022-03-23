import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ItemsEntity } from '../interfaces/books-request-response.interface';
import { BookCommunicationService } from '../services/book-communication.service';

@Component({
  selector: 'app-book-item-details',
  templateUrl: './book-item-details.component.html',
  styleUrls: ['./book-item-details.component.css'],
})
export class BookItemDetailsComponent implements OnInit, OnDestroy {
  isAddedToWishlist: boolean = false;
  username!: string | null | undefined;
  book!: ItemsEntity;
  unsubscribe$$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookCommunicationService: BookCommunicationService
  ) {}

  ngOnInit(): void {
    this.initQueryParams();
    this.bookCommunicationService.transporterBookDetails$
      .pipe(takeUntil(this.unsubscribe$$))
      .subscribe((book) => (this.book = book));
    this.bookCommunicationService.wishlistBooks$
      .pipe(takeUntil(this.unsubscribe$$))
      .subscribe((wishlist) => {
        wishlist.some((wish) => {
          const checkIfThere = wish.id === this.book.id;
          this.isAddedToWishlist = checkIfThere;
          return checkIfThere;
        });
      });
  }

  private initQueryParams(): void {
    this.username = this.route.snapshot.queryParamMap.get('username');
  }

  closeBookItemModal(): void {
    this.router.navigate(['book-store/dashboard'], {
      queryParams: {
        username: this.username,
      },
    });
  }

  addToWishList(book: ItemsEntity): void {
    this.bookCommunicationService.addToWishList(book);
  }

  ngOnDestroy(): void {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
