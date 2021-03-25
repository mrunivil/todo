import { Injectable } from '@angular/core';
import { AbstractError } from 'src/app/core/error/abstract.error';
import { GenericError } from 'src/app/core/error/generic.error';
import { TodoModel } from 'src/app/core/model';
import { AbstractCreateTodosDataSource } from '../data-source/abstract.create.todos.data.source';
import { AbstractCreateTodosRepository } from './abstract.create.todos.repository';

@Injectable()
export class CreateTodosRepository extends AbstractCreateTodosRepository {
  constructor(private readonly dataSource: AbstractCreateTodosDataSource) {
    super();
  }
  async createTodos(param: TodoModel[]): Promise<TodoModel[] | AbstractError> {
    try {
      if (!!param) {
        return await this.dataSource.createTodos(param);
      } else {
        return new GenericError();
      }
    } catch (error) {
      return new GenericError();
    }
  }
}
