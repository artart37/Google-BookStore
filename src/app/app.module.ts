import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StructuralModule } from './structural-components/structural.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StructuralModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
