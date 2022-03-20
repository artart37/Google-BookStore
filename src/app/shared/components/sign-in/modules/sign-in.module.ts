import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../../button/module/button-module';
import { EmptyValidationModule } from 'src/app/shared/directives/custom-validation/empty-validation/module/empty-validation.module';

import { SigninRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from '../sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ButtonsModule,
    EmptyValidationModule,
    SigninRoutingModule,
  ],
  exports: [SignInComponent],
})
export class SigninModule {}
