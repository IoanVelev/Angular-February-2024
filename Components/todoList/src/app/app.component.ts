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

  visibleItemsCopy: ListItem[] = this.items;

  addNewTask(){
    this.items.push(new ListItem(this.newTaskText));
    this.newTaskText = '';
  }

  changedFilter(newValue: any){
    if (newValue == '0') {
      this.visibleItemsCopy = this.items;
    } else if (newValue == '1'){
      this.visibleItemsCopy = this.items.filter(item => item.isComplete == false);
    }
    else if (newValue == '2'){
      this.visibleItemsCopy = this.items.filter(item => item.isComplete == true);
    }
    
  }
  

  toggleItem(item: ListItem){
    item.isComplete = !item.isComplete;
  }
}
