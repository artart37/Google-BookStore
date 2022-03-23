import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from '../book-store.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: BookStoreComponent,
    children: [
      {
        path: 'book-item-details',
        outlet: 'bookItemModal',
        loadChildren: () =>
          import('../book-item-details/modules/book-item-details.module').then(
            (mod) => mod.BookItemDetailsModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookStoreRoutingModule {}
