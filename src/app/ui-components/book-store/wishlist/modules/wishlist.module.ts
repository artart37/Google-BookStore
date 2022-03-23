import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'src/app/shared/components/button/module/button-module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from '../wishlist.component';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    SharedPipesModule,
    WishlistRoutingModule,
  ],
  exports: [WishlistComponent],
})
export class WishlistModule {}
