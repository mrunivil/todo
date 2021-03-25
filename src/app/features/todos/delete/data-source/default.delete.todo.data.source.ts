import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { MockTodosService } from 'src/app/features/services/mock.todos.service';
import { AbstractDeleteTodoDataSource } from './abstract.delete.todo.data.source';

@Injectable()
export class DefaultDeleteTodoDataSource extends AbstractDeleteTodoDataSource {
  constructor(private readonly todosService: MockTodosService) {
    super();
  }
  async deleteTodo(param: TodoModel): Promise<void> {
    console.log(`DataSource: Todo ${param.title} has been deleted`);
    this.todosService.remove(param);
  }
}
