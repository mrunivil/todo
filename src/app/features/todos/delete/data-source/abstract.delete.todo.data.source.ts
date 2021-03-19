import { IDataSource } from 'src/app/core/data.source';
import { TodoModel } from 'src/app/core/model';

export abstract class AbstractDeleteTodoDataSource implements IDataSource {
  abstract deleteTodo(param: TodoModel): Promise<void>;
}
