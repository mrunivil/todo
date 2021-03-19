import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { AbstractDeleteTodoDataSource } from './abstract.delete.todo.data.source';

@Injectable()
export class DefaultDeleteTodoDataSource extends AbstractDeleteTodoDataSource {
  async deleteTodo(param: TodoModel): Promise<void> {
    console.log(`DataSource: Todo ${param.title} has been deleted`);
  }
}
