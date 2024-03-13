import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, ErrorPageComponent]
})
export class SharedModule { }
