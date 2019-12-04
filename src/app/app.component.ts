import { Component } from '@angular/core';
import { User } from './user-form/user.model';
import { TDItem } from './todo/todo-item/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {
  title = 'HelloAngulareu2';
  prenom="fb";
  user:Partial<User>={name:"",email:"",phone:""};
  toDoItems:TDItem[] = [];
  onAddItem(item:TDItem){
    for (const it of this.toDoItems) {
      if(it.name===item.name){
        console.log(`item ${it.name} already in list`);
        return;
      }
    }
    this.toDoItems.push(item);
    console.log("added "+item.name);
  }
}
