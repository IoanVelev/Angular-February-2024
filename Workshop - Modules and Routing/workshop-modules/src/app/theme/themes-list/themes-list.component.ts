import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{
  themes: Theme[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService){}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.authUser?.id || '';
  }

  isSubscribed(theme: Theme){
    const isSubscribedUser = theme.subscribers.find(s => s === this.userId);
    
    return isSubscribedUser;
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
       this.themes = themes;
       console.log(themes);
       
       setTimeout(() => {
        this.isLoading = false;
       }, 3000);
       
    });
  }
}
