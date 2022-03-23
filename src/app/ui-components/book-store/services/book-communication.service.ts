import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemsEntity } from '../interfaces/books-request-response.interface';

@Injectable({
  providedIn: 'root',
})
export class BookCommunicationService {
  wishlist: ItemsEntity[] = [];
  transporterBookDetails$$: BehaviorSubject<ItemsEntity> = new BehaviorSubject(
    {} as ItemsEntity
  );
  transporterBookDetails$: Observable<ItemsEntity> =
    this.transporterBookDetails$$.asObservable();
  wishlistBooks$$: BehaviorSubject<ItemsEntity[]> = new BehaviorSubject(
    this.wishlist
  );

  wishlistBooks$: Observable<ItemsEntity[]> =
    this.wishlistBooks$$.asObservable();

  public transportBookDetails(book: ItemsEntity): void {
    this.transporterBookDetails$$.next(book);
  }

  public addToWishList(book: ItemsEntity): void {
    this.wishlist.push(book);
    this.wishlistBooks$$.next(this.wishlist);
  }

  public removeWishFromList(book: ItemsEntity): void {
    this.wishlist = this.wishlist.filter((wish) => wish.id != book.id);
    this.wishlistBooks$$.next(this.wishlist);
  }

  public resetWishList(): void {
    this.wishlist.length = 0;
    this.wishlistBooks$$.next(this.wishlist);
  }
}
