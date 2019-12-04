import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-list',
  templateUrl: './toggle-list.component.html',
  styleUrls: ['./toggle-list.component.css']
})
export class ToggleListComponent implements OnInit {

  @Input() items:string[]=[];
  selectedItems:string[]=[];


  constructor() { }

  ngOnInit() {
  }

  isSelected(item:string){
    return this.selectedItems.includes(item);
  }
  toggleItem(item:string){
    if(this.isSelected(item)){
      const i=this.selectedItems.indexOf(item);
      this.selectedItems.splice(i,1);
    }else{
      this.selectedItems.push(item);
    }
  }
}
