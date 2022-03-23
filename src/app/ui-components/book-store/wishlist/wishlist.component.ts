import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ItemsEntity } from '../interfaces/books-request-response.interface';
import { BookCommunicationService } from '../services/book-communication.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlist!: ItemsEntity[];
  unsubscribe$$: Subject<void> = new Subject();
  constructor(private bookCommunicationService: BookCommunicationService) {}

  ngOnInit(): void {
    this.bookCommunicationService.wishlistBooks$
      .pipe(takeUntil(this.unsubscribe$$))
      .subscribe((wishlist) => (this.wishlist = wishlist));
  }

  public trackById(index: number, item: ItemsEntity): string | number {
    return item.id ? item.id : index;
  }

  removeWishListItem(item: ItemsEntity): void {
    this.bookCommunicationService.removeWishFromList(item);
  }

  ngOnDestroy(): void {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
