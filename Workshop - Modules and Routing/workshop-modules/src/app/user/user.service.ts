import { Injectable } from '@angular/core';
import { AuthUser } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authUser: AuthUser | undefined;
  private USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.authUser;
  }

  constructor() {
    try {
      const user = localStorage.getItem(this.USER_KEY) || '';
      this.authUser = JSON.parse(user);
    } catch (err) {
      this.authUser = undefined;
    }
  }

  login() {
    this.authUser = {
      username: 'peter',
      email: 'peter@abv.bg',
      password: 'asdasd',
      phone: '321-321-321-321'
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.authUser));
  }

  logout() {
    this.authUser = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
