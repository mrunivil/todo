import { CreateTodosPageViewModel } from 'src/app/pages/create-todos/create.todos.page.view.model';

export interface ICreateTodosPageStateModel {
  createTodosPageViewModel: CreateTodosPageViewModel;
}
export const CreateTodosPageStateModel: ICreateTodosPageStateModel = {
  createTodosPageViewModel: {
    toDoListViewModel: { toDoListItemViewModels: [] },
    editTodoViewModel: { todo: undefined },
  },
};
