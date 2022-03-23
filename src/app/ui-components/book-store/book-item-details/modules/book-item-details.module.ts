import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'src/app/shared/components/modal/module/modal.module';
import { ButtonsModule } from 'src/app/shared/components/button/module/button-module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

import { BookItemDetailsComponent } from '../book-item-details.component';

import { BookItemDetailsRoutingModule } from './book-item-details-routing.module';

@NgModule({
  declarations: [BookItemDetailsComponent],
  imports: [
    CommonModule,
    ModalModule,
    ButtonsModule,
    SharedPipesModule,
    BookItemDetailsRoutingModule,
  ],
  exports: [BookItemDetailsComponent],
})
export class BookItemDetailsModule {}
