import { Component, OnInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { TDItem } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
@Directive(
  {
    selector: '[itemUpdated]'
  }
)
export class TodoItemComponent implements OnInit {



  @Input() item? : TDItem;
  @Output('itemUpdated') itemUpdated=new EventEmitter<TDItem>();

  constructor() { }

  ngOnInit() {
  }
  toggleItem(item : TDItem){
    item.isDone=!item.isDone;
    this.itemUpdated.emit(item);
  }
}
