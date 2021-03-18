import { Injectable } from '@angular/core';
import { AbstractError } from '../../../../core/error/abstract.error';
import { TodoModel } from '../../../../core/model';
import { AbstractGetTodosRepository } from '../repository/abstract.get.todos.repository';
import { AbstractGetTodosUseCase } from './abstract.get.todos.use.case';

@Injectable()
export class GetTodosUseCase extends AbstractGetTodosUseCase {
    constructor(private repository: AbstractGetTodosRepository) { super(); }
    execute(param?: TodoModel): Promise<Array<TodoModel> | AbstractError> {
        return this.repository.getTodos();
    }
}
