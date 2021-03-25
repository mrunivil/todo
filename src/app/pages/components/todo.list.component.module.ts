import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TodoListComponent } from './todo-list/todo.list.component';
import { ToDoListItemComponent } from './todo-list/todo-list-item/todo.list.item.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [TodoListComponent, ToDoListItemComponent],
  exports: [TodoListComponent, ToDoListItemComponent],
})
export class TodoListComponentModule {}
