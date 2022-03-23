import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, timer } from 'rxjs';
import {
  debounce,
  distinctUntilChanged,
  filter,
  map,
  skipWhile,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { Status } from './interfaces/book-store.interface';
import { ItemsEntity } from './interfaces/books-request-response.interface';
import { BookCommunicationService } from './services/book-communication.service';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css'],
})
export class BookStoreComponent implements OnInit, OnDestroy {
  username!: string | null | undefined;
  bookItems!: ItemsEntity[] | null | undefined;
  @ViewChild('searchInput', { static: true }) searchInput!: NgModel;
  status: Status = 'IDLE';
  unsubscribe$$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private bookCommunicationService: BookCommunicationService
  ) {}

  ngOnInit(): void {
    this.initQueryParams();
    this.trackSearch();
  }

  private initQueryParams(): void {
    this.username = this.route.snapshot.queryParamMap.get('username');
  }

  openBookItemDetails(book: ItemsEntity): void {
    this.router
      .navigate([{ outlets: { bookItemModal: 'book-item-details' } }], {
        relativeTo: this.route,
        queryParams: { username: this.username },
        skipLocationChange: true,
      })
      .then(() => this.bookCommunicationService.transportBookDetails(book));
  }

  private trackSearch(): void {
    this.searchInput.control.valueChanges
      .pipe(
        skipWhile((s) => !s),
        takeUntil(this.unsubscribe$$),
        debounce(() => timer(200)),
        map((s) => s?.trim()),
        distinctUntilChanged(),
        filter((s) => typeof s === 'string' && s?.length > 0),
        tap(() => (this.status = 'LOADING')),
        switchMap((s) => this.bookService.getGoogleBooks(s))
      )
      .subscribe(
        (books) => {
          this.bookItems = books?.items;
          this.status = 'SUCCESS';
        },
        () => (this.status = 'FAILURE')
      );
  }

  public trackById(index: number, item: ItemsEntity): string | number {
    return item.id ? item.id : index;
  }

  ngOnDestroy(): void {
    this.unsubscribe$$.next();
    this.unsubscribe$$.complete();
  }
}
