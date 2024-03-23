import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isShown: boolean = true;


  toggle(){
    this.isShown = !this.isShown;
  }
}
