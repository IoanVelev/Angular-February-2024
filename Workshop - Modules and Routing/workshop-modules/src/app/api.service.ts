import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient ) {
    
  }

  getThemes(){
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);

  }

  getSingleTheme(){
    const { apiUrl } = environment;
    //this.http.get<Theme>(`apiUrl`)
    //TODO
  }

  createTheme(themeName: string, postText: string){
    const { apiUrl } = environment;
    const payload = {themeName, postText}
    return this.http.post<Theme>(`${apiUrl}/themes`, payload);
  }

  getPosts(){
    const { apiUrl } = environment;

    return this.http.get<Post[]>(`${apiUrl}/posts?limit=5`);
  }
}
