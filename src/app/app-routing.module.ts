import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
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