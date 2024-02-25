import { Component } from '@angular/core';
import { ListItem } from 'src/shared/models/listItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: ListItem[] = [
    new ListItem('Take shower', true),
    new ListItem('Drink coffee', true),
    new ListItem('Read news and e-mails'),
  ]
  title = 'TodoList';

  toggleItem(item: ListItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
