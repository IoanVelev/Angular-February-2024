import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoaderComponent, WelcomeMsgComponent, EmailDirective]
})
export class SharedModule { }
