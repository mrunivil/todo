import { IDataSource } from '../../../../core/data.source';
import { TodoModel } from '../../../../core/model/todo.model';

export abstract class AbstractGetTodosDataSource implements IDataSource {
  abstract getTodos(): Promise<Array<TodoModel>>;
}
