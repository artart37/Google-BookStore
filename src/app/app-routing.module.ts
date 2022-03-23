import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookStoreGuard } from './ui-components/book-store/guards/book-store.guard';

const appRoutes: Routes = [
  {
    path:"wishlist",
    loadChildren:() => import("./ui-components/book-store/wishlist/modules/wishlist.module").then(mod=>mod.WishlistModule),
  },
  {
    path:"book-store",
    loadChildren:() => import("./ui-components/book-store/modules/book-store.module").then(mod=>mod.BookStoreModule),
    canActivate: [BookStoreGuard]
  },
  {
    path:"404",
    loadChildren:() =>import("./shared/components/error-pages/page-not-found/modules/page-not-found-module").then(mod=>mod.PageNotFoundModule)
  },
  {
    path:"**",
    loadChildren:() =>import("./shared/components/error-pages/page-not-found/modules/page-not-found-module").then(mod=>mod.PageNotFoundModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
 ],
  exports: [RouterModule]
})

export class AppRoutingModule { }