import { Injectable } from '@angular/core';
import { DefaultHomePageStateModel } from './model/default.home.page.state.model';
import { HomePageStateModel } from './model/home.state.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AbstractGetTodosUseCase } from '../../features/todos/get/use-case/abstract.get.todos.use.case';

export class HomePageGetTodosAction {
  static readonly type = '[HomePage] GetTodosAction';
}


@State<HomePageStateModel>({
  name: 'Home',
  defaults: DefaultHomePageStateModel
})
@Injectable()
export class HomePageState {
  constructor(private readonly getTodosUseCase: AbstractGetTodosUseCase) { }

  @Selector()
  static homePageViewModel({ homePageViewModel }: HomePageStateModel) {
    return homePageViewModel;
  }

  @Action(HomePageGetTodosAction)
  async getTodos({ patchState }: StateContext<HomePageStateModel>) {
    const result = await this.getTodosUseCase.execute();
    if (result instanceof Array) {
      patchState({
        homePageViewModel: {
          toDoListViewModel: {
            toDos: result
          }
        }
      });
    }
  }
}
