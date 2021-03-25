import { ToDoListViewModel } from '../components/todo-list/todo.list.view.model';
import { EditTodoViewModel } from './components/edit.todo.view.model';

export class CreateTodosPageViewModel {
  toDoListViewModel: ToDoListViewModel = { toDoListItemViewModels: [] };
  editTodoViewModel: EditTodoViewModel;
}
