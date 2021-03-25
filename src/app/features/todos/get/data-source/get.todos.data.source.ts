import { Injectable } from '@angular/core';
import { MockTodosService } from 'src/app/features/services/mock.todos.service';
import { TodoModel } from '../../../../core/model/todo.model';
import { AbstractGetTodosDataSource } from './abstract.get.todos.data.source';

@Injectable()
export class GetTodosDataSource extends AbstractGetTodosDataSource {
  constructor(private readonly todosService: MockTodosService) {
    super();
  }
  async getTodos(): Promise<TodoModel[]> {
    return this.todosService.getTodos();
  }
}
