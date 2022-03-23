import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAuthorsPipe } from './get-authors/get-authors.pipe';



@NgModule({
  declarations: [GetAuthorsPipe],
  imports: [
    CommonModule
  ],
  exports:[GetAuthorsPipe]
})
export class SharedPipesModule { }
