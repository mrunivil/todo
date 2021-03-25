import { Injectable } from '@angular/core';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { AbstractCreateTodosRepository } from '../repository/abstract.create.todos.repository';
import { AbstractCreateTodosUseCase } from './abstract.create.todos.use.case';

@Injectable()
export class CreateTodosUseCase extends AbstractCreateTodosUseCase {
  constructor(private readonly repository: AbstractCreateTodosRepository) {
    super();
  }
  execute(param: TodoModel[]): Promise<TodoModel[] | AbstractError> {
    return this.repository.createTodos(param);
  }
}
