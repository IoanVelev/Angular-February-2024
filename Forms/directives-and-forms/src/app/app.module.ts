import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirective } from './my-structural.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MyRouterLinkDirective,
    MyStructuralDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // -> Template driven approach
    ReactiveFormsModule, // -> Reactive forms approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
