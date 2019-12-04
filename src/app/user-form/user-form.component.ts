import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user : Partial<User> = {}
  @Output() save=new EventEmitter<Partial<User>>();

  constructor() { }

  ngOnInit() {
    this.user.email=this.user.email==null?"":this.user.email;
  }
  onSubmit(event:Event){
    event.preventDefault();
    console.log("clicked!" + this.user.name);
    this.save.emit({...this.user});
  }

}
