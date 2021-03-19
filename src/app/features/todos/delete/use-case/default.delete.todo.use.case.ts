import { Injectable } from '@angular/core';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { AbstractDeleteTodoRepository } from '../repository/abstract.delete.todo.repository';
import { AbstractDeleteTodoUseCase } from './abstract.delete.todo.use.case';

@Injectable()
export class DefaultDeleteTodoUseCase extends AbstractDeleteTodoUseCase {
  constructor(private repository: AbstractDeleteTodoRepository) {
    super();
  }
  execute(param: TodoModel): Promise<void | AbstractError> {
    return this.repository.deleteTodo(param);
  }
}
