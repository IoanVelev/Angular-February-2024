import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {

  constructor(private apiService: ApiService){}

  addTheme(ev: Event, themeName: string, themeText: string){
    ev.preventDefault();
    this.apiService.createTheme(themeName, themeText);
  }
}
