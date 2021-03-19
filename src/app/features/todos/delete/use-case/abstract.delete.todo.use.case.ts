import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { IUseCase } from 'src/app/core/use.case';

export abstract class AbstractDeleteTodoUseCase
  implements IUseCase<TodoModel, Promise<void | AbstractError>> {
  abstract execute(param: TodoModel): Promise<void | AbstractError>;
}
