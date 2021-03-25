import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch, append, removeItem } from '@ngxs/store/operators';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { AbstractCreateTodosUseCase } from 'src/app/features/todos/create/use-case/abstract.create.todos.use.case';
import { ToDoListItemViewModel } from 'src/app/pages/components/todo-list/todo-list-item/todo.list.item.view.model';
import { EditTodoViewModel } from 'src/app/pages/create-todos/components/edit.todo.view.model';
import {
  CreateTodosPageStateModel,
  ICreateTodosPageStateModel,
} from './model/create.todos.page.state.model';

export class CreateTodosPageSaveTodosAction {
  static readonly type = '[CreateTodosPage] SaveTodosAction';
}

export class CreateTodosPageAddTodoToListAction {
  constructor(public readonly todo: TodoModel) {}
  static readonly type = '[CreateTodosPage] AddTodoToListAction';
}

export class CreateTodosPageRemoveTodoFromListAction {
  constructor(public readonly todo: TodoModel) {}
  static readonly type = '[CreateTodosPage] RemoveTodoFromListAction';
}

export class CreateTodosPageClearTodoListAction {
  static readonly type = '[CreateTodosPage] ClearTodoListAction';
}

@State<ICreateTodosPageStateModel>({
  name: 'CreateTodosPageState',
  defaults: CreateTodosPageStateModel,
})
@Injectable()
export class CreateTodosPageState {
  constructor(
    private readonly createTodosUseCase: AbstractCreateTodosUseCase
  ) {}

  @Selector()
  static createTodosPageViewModel({
    createTodosPageViewModel,
  }: ICreateTodosPageStateModel) {
    return createTodosPageViewModel;
  }

  @Action(CreateTodosPageSaveTodosAction)
  async saveTodos({ getState }: StateContext<ICreateTodosPageStateModel>) {
    const result = await this.createTodosUseCase.execute(
      getState().createTodosPageViewModel.toDoListViewModel.toDoListItemViewModels.map<TodoModel>(
        (viewModel) => viewModel.toDo
      )
    );
    if (result instanceof AbstractError) {
      //TODO
    }
  }

  @Action(CreateTodosPageAddTodoToListAction)
  async addTodoToList(
    { setState }: StateContext<ICreateTodosPageStateModel>,
    { todo }: CreateTodosPageAddTodoToListAction
  ) {
    if (todo.title.trim().length > 0) {
      const todoListItemViewModel: ToDoListItemViewModel = { toDo: todo };
      setState(
        patch({
          createTodosPageViewModel: patch({
            toDoListViewModel: patch({
              toDoListItemViewModels: append([todoListItemViewModel]),
            }),
            editTodoViewModel: {} as EditTodoViewModel,
          }),
        })
      );
    }
  }

  @Action(CreateTodosPageRemoveTodoFromListAction)
  async removeTodoFromList(
    { setState }: StateContext<ICreateTodosPageStateModel>,
    { todo }: CreateTodosPageRemoveTodoFromListAction
  ) {
    setState(
      patch({
        createTodosPageViewModel: patch({
          toDoListViewModel: patch({
            toDoListItemViewModels: removeItem<ToDoListItemViewModel>(
              (item) => item.toDo === todo
            ),
          }),
        }),
      })
    );
  }

  @Action(CreateTodosPageClearTodoListAction)
  async clearTodoList({ setState }: StateContext<ICreateTodosPageStateModel>) {
    setState(
      patch({
        createTodosPageViewModel: patch({
          toDoListViewModel: patch({
            toDoListItemViewModels: [] as ToDoListItemViewModel[],
          }),
        }),
      })
    );
  }
}
