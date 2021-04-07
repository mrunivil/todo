import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { EditTodoViewModel } from './edit.todo.view.model';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit.todo.component.html',
  styleUrls: ['./edit.todo.component.scss'],
})
export class EditTodoComponent implements OnChanges {
  @Input() viewModel: EditTodoViewModel;
  @Output() onTodoEdited = new EventEmitter<TodoModel>();
  @Output() onToDosSaved = new EventEmitter<void>();
  todoTitle: string = '';

  ngOnChanges(_changes: SimpleChanges): void {
    this.todoTitle = this.viewModel?.todo?.title ?? '';
  }

  editTodo() {
    this.onTodoEdited.emit(new TodoModel({ title: this.todoTitle }));
  }

  saveTodos() {
    this.onToDosSaved.emit();
  }
}
