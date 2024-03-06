import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClientModule) {
    const { apiUrl } = environment
  }

  getThemes(){

  }

  getPosts(limit?:number){

  }
}
