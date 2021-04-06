import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/core/model';
import { environment } from 'src/environments/environment';
import { AbstractCreateTodosDataSource } from './abstract.create.todos.data.source';

@Injectable()
export class CreateTodosDataSource extends AbstractCreateTodosDataSource {
  constructor(private readonly http: HttpClient) {
    super();
  }
  async createTodos(param: TodoModel[]): Promise<TodoModel[]> {
    param.forEach(
      async (todo) =>
        await this.http
          .post<TodoModel>(
            environment.backendUrl,
            todo,
            environment.httpOptions
          )
          .toPromise()
    );
    // return this.http
    //   .post<TodoModel[]>(environment.backendUrl, param, environment.httpOptions)
    //   .toPromise();
    return param;
  }
}
