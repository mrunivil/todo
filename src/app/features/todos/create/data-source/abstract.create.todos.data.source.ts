import { IDataSource } from 'src/app/core/data.source';
import { TodoModel } from 'src/app/core/model';

export abstract class AbstractCreateTodosDataSource implements IDataSource {
  abstract createTodos(param: TodoModel[]): Promise<TodoModel[]>;
}
