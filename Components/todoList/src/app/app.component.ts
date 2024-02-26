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

  listFilter: String = '0';

  newTaskText = '';
  title = 'TodoList';

  addNewTask(){
    this.items.push(new ListItem(this.newTaskText));
    this.newTaskText = '';
  }
  

  toggleItem(item: ListItem){
    item.isComplete = !item.isComplete;
  }
}
