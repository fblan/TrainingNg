import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ToggleListComponent } from './toggle-list/toggle-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    UserFormComponent,
    ToggleListComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
