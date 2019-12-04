import { Component, OnInit, Input } from '@angular/core';
import { TDItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() toDoItemList : TDItem[];

  constructor() { }

  ngOnInit() {
  }
  onItemUpdated(item:TDItem){
    for(let i=0;i<this.toDoItemList.length;i++){
      if(this.toDoItemList[i].name===item.name){
        this.toDoItemList.splice(i,1);
        this.toDoItemList.push(item);
      }
    }
    
  }
  orderItemsByIsDone():TDItem[]{
    return this.toDoItemList.sort((a,b)=>this.orderByIsDone(a,b));
  }
  orderByIsDone(a:TDItem,b:TDItem):number{
    if(a.isDone===b.isDone){
      return 0;
    }
    if(a.isDone){
      return 1;
    }
    return -1;
  }
}
