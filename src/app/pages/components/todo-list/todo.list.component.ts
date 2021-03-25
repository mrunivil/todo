import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { ToDoListViewModel } from './todo.list.view.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.list.component.html',
  styleUrls: ['./todo.list.component.scss'],
})
export class TodoListComponent {
  @Input() viewModel: ToDoListViewModel;
  @Output() onToDoDeleted = new EventEmitter<TodoModel>();

  deleteToDo(toDo: TodoModel) {
    this.onToDoDeleted.emit(toDo);
  }
}
