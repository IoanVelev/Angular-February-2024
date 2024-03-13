import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GlobalLoaderComponent,
    HomeViewComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [GlobalLoaderComponent, HomeViewComponent, NavComponent]
})
export class CoreModule { }
