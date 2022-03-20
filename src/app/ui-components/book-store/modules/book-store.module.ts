import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookStoreComponent } from '../book-store.component';
import { BookStoreRoutingModule } from './book-store-routing.module';

@NgModule({
  declarations: [BookStoreComponent],
  imports: [CommonModule, BookStoreRoutingModule],
  exports: [BookStoreComponent],
})
export class BookStoreModule {}
