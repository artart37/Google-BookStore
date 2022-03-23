import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { BookStoreComponent } from '../book-store.component';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

import { BookStoreRoutingModule } from './book-store-routing.module';

@NgModule({
  declarations: [BookStoreComponent],
  imports: [
    CommonModule,
    FormsModule,
    SpinnerModule,
    SharedPipesModule,
    BookStoreRoutingModule,
  ],
  exports: [BookStoreComponent],
})
export class BookStoreModule {}
