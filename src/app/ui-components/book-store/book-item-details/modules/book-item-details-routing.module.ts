import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookItemDetailsComponent } from '../book-item-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookItemDetailsRoutingModule {}
