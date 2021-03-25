import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { IUseCase } from 'src/app/core/use.case';

export abstract class AbstractCreateTodosUseCase
  implements IUseCase<TodoModel[], Promise<TodoModel[] | AbstractError>> {
  abstract execute(param: TodoModel[]): Promise<TodoModel[] | AbstractError>;
}
