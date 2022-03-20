import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../sign-in.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninRoutingModule {}
