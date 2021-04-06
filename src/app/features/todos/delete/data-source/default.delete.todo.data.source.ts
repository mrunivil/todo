import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { AbstractDeleteTodoDataSource } from './abstract.delete.todo.data.source';

@Injectable()
export class DefaultDeleteTodoDataSource extends AbstractDeleteTodoDataSource {
  constructor(private readonly http: HttpClient) {
    super();
  }
  async deleteTodo(param: TodoModel): Promise<TodoModel> {
    await this.http
      .delete<TodoModel>(
        `${environment.backendUrl}/${param.id}`,
        environment.httpOptions
      )
      .toPromise();
    return param;
  }
}
