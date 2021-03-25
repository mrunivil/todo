import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { MockTodosService } from 'src/app/features/services/mock.todos.service';
import { AbstractCreateTodosDataSource } from './abstract.create.todos.data.source';

@Injectable()
export class CreateTodosDataSource extends AbstractCreateTodosDataSource {
  constructor(private readonly todosService: MockTodosService) {
    super();
  }
  async createTodos(param: TodoModel[]): Promise<TodoModel[]> {
    param.forEach((todo) => {
      console.log(`DataSource: Todo ${todo.title} has been created.`);
      this.todosService.add(todo);
    });
    return param;
  }
}
