import { Injectable } from '@angular/core';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { GenericError } from 'src/app/core/error/generic.error';
import { TodoModel } from 'src/app/core/model';
import { AbstractDeleteTodoDataSource } from '../data-source/abstract.delete.todo.data.source';
import { AbstractDeleteTodoRepository } from './abstract.delete.todo.repository';

@Injectable()
export class DefaultDeleteTodoRepository extends AbstractDeleteTodoRepository {
  constructor(private dataSource: AbstractDeleteTodoDataSource) {
    super();
  }
  async deleteTodo(param: TodoModel): Promise<void | AbstractError> {
    try {
      if (!!param) {
        return await this.dataSource.deleteTodo(param);
      } else {
        return new GenericError();
      }
    } catch (error) {
      return new GenericError();
    }
  }
}
