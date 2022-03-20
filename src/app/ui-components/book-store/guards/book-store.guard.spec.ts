import { TestBed } from '@angular/core/testing';

import { BookStoreGuard } from './book-store.guard';

describe('BookStoreGuard', () => {
  let guard: BookStoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookStoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
