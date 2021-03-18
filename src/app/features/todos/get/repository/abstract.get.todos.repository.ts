import { AbstractError } from '../../../../core/error/abstract.error';
import { TodoModel } from '../../../../core/model/todo.model';
import { IRepository } from '../../../../core/repository';

export abstract class AbstractGetTodosRepository implements IRepository {
    abstract getTodos(): Promise<Array<TodoModel> | AbstractError>;
}
