import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyValidationDirective } from '../empty-validation.directive';

@NgModule({
  declarations: [EmptyValidationDirective],
  imports: [CommonModule, FormsModule],
  exports: [EmptyValidationDirective],
})
export class EmptyValidationModule {}
