import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { HomeViewComponent } from './home-view/home-view.component';



@NgModule({
  declarations: [
    GlobalLoaderComponent,
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GlobalLoaderComponent, HomeViewComponent]
})
export class CoreModule { }
