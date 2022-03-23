import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { BooksSearchResponse } from '../interfaces/books-request-response.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  public getGoogleBooks(
    searchValue: string,
  ): Observable<BooksSearchResponse | null> {
    return this.http
      .get<BooksSearchResponse | null>(`${environment.baseApiUrl}`, {
        params: {
          q: searchValue,
          key: environment.apiKey,
          startIndex: 0,
          maxResults: 20,
        },
      })
      .pipe(
        catchError((error) => {
          console.error(error, 'Error fetching books ');
          return of(null);
        })
      );
  }
}
