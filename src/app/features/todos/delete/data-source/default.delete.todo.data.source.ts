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
    const url = `${environment.backendUrl}/${param}`;
    return this.http
      .delete<TodoModel>(url, environment.httpOptions)
      .toPromise();
  }
}
