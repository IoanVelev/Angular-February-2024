import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isLoading = false;
  users: User[] = [];

  constructor(private userService: UserService){

  }

  fetchUsersData(){
    
    this.isLoading = true;


    setTimeout(() => {
      this.userService.getUsersData().subscribe(users => {
       this.users = users;
      });

      this.isLoading = false;
    }, 2500);
  }
}
