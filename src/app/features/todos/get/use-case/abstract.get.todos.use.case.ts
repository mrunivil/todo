import { AbstractError } from '../../../../core/error/abstract.error';
import { TodoModel } from '../../../../core/model/todo.model';
import { IUseCase } from '../../../../core/use.case';

export abstract class AbstractGetTodosUseCase implements IUseCase<TodoModel, Promise<Array<TodoModel> | AbstractError>> {
    abstract execute(params?: TodoModel): Promise<Array<TodoModel> | AbstractError>;
}
