import { Injectable } from '@angular/core';
import { AbstractError } from '../../../../core/error/abstract.error';
import { GenericError } from '../../../../core/error/generic.error';
import { TodoModel } from '../../../../core/model/todo.model';
import { AbstractGetTodosDataSource } from '../data-source/abstract.get.todos.data.source';
import { AbstractGetTodosRepository } from './abstract.get.todos.repository';

@Injectable()
export class GetTodosRepository extends AbstractGetTodosRepository {
  constructor(private dataSource: AbstractGetTodosDataSource) {
    super();
  }
  async getTodos(): Promise<TodoModel[] | AbstractError> {
    try {
      const result = await this.dataSource.getTodos();
      if (!(result instanceof Array)) {
        return new GenericError();
      }
      return result;
    } catch (e) {
      return new GenericError();
    }
  }
}
