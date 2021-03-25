import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { ToDoListItemViewModel } from './todo.list.item.view.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo.list.item.component.html',
  styleUrls: ['./todo.list.item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() viewModel: ToDoListItemViewModel;
  @Output() onToDoDeleted = new EventEmitter<TodoModel>();
  deleteToDo() {
    this.onToDoDeleted.emit(this.viewModel.toDo);
  }
}
