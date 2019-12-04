import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TDItem } from '../todo-item/todo-item.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() itemName:string;
  @Output() addItem=new EventEmitter<TDItem>();

  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(event:Event){
    event.preventDefault();
    console.log("clicked!" + this.itemName);
    this.addItem.emit({name:this.itemName,isDone:false});
  }

}
