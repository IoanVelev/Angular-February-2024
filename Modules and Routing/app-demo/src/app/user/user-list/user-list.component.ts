import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isLoading = false;

  fetchUsersData(){
    this.isLoading = true;


    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
}
