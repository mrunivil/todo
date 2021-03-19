import { Injectable } from '@angular/core';
import { DefaultHomePageStateModel } from './model/default.home.page.state.model';
import { HomePageStateModel } from './model/home.state.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AbstractGetTodosUseCase } from '../../features/todos/get/use-case/abstract.get.todos.use.case';
import { AbstractDeleteTodoUseCase } from 'src/app/features/todos/delete/use-case/abstract.delete.todo.use.case';
import { ToDoListItemViewModel } from 'src/app/pages/home/components/todo-list/todo-list-item/todo.list.item.view.model';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';

export class HomePageGetToDosAction {
  static readonly type = '[HomePage] GetTodosAction';
}
export class HomePageDeleteToDoAction {
  constructor(public readonly toDo: TodoModel) {}
  static readonly type = '[HomePage] DeleteToDoAction';
}

@State<HomePageStateModel>({
  name: 'Home',
  defaults: DefaultHomePageStateModel,
})
@Injectable()
export class HomePageState {
  constructor(
    private readonly getTodosUseCase: AbstractGetTodosUseCase,
    private readonly deleteToDoUseCase: AbstractDeleteTodoUseCase
  ) {}

  @Selector()
  static homePageViewModel({ homePageViewModel }: HomePageStateModel) {
    return homePageViewModel;
  }

  @Action(HomePageGetToDosAction)
  async getTodos({ patchState }: StateContext<HomePageStateModel>) {
    const result = await this.getTodosUseCase.execute();
    if (result instanceof Array) {
      patchState({
        homePageViewModel: {
          toDoListViewModel: {
            toDoListItemViewModels: result.map<ToDoListItemViewModel>(
              (toDoModel) => {
                return { toDo: toDoModel };
              }
            ),
          },
        },
      });
    }
  }
  @Action(HomePageDeleteToDoAction)
  async deleteToDo(
    { patchState, getState }: StateContext<HomePageStateModel>,
    { toDo }: HomePageDeleteToDoAction
  ) {
    const result = await this.deleteToDoUseCase.execute(toDo);
    if (!(result instanceof AbstractError)) {
      const toDoListItemViewModels = getState().homePageViewModel
        .toDoListViewModel.toDoListItemViewModels;
      patchState({
        homePageViewModel: {
          toDoListViewModel: {
            toDoListItemViewModels: toDoListItemViewModels.filter(
              (e) => e.toDo !== toDo
            ),
          },
        },
      });
    }
  }
}
