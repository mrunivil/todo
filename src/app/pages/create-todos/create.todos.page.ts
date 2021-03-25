import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/core/model';
import {
  CreateTodosPageAddTodoToListAction,
  CreateTodosPageClearTodoListAction,
  CreateTodosPageSaveTodosAction,
  CreateTodosPageRemoveTodoFromListAction,
  CreateTodosPageState,
} from 'src/app/state/create-todos/create.todos.page.state';
import { CreateTodosPageViewModel } from './create.todos.page.view.model';

@Component({
  templateUrl: './create.todos.page.html',
  styleUrls: ['./create.todos.page.scss'],
})
export class CreateTodosPage {
  @Select(CreateTodosPageState.createTodosPageViewModel)
  $viewModel: Observable<CreateTodosPageViewModel>;

  constructor(private readonly store: Store) {}

  ionViewWillEnter(): void {
    this.clearTodoList();
  }

  private clearTodoList() {
    this.store.dispatch(new CreateTodosPageClearTodoListAction());
  }

  removeTodoFromList(todo: TodoModel) {
    this.store.dispatch(new CreateTodosPageRemoveTodoFromListAction(todo));
  }

  addTodoToList(todo: TodoModel) {
    this.store.dispatch(new CreateTodosPageAddTodoToListAction(todo));
  }

  saveTodos() {
    this.store.dispatch(new CreateTodosPageSaveTodosAction());
  }
}
