import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = `https://jsonplaceholder.typicode.com/users`;
  constructor(private http: HttpClient) { }


  getUsersData() {
    return this.http.get<User[]>(this.API);
  }
}
