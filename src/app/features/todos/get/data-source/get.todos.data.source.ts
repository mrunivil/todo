import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from '../../../../core/model/todo.model';
import { AbstractGetTodosDataSource } from './abstract.get.todos.data.source';
import { environment } from 'src/environments/environment';
@Injectable()
export class GetTodosDataSource extends AbstractGetTodosDataSource {
  constructor(private readonly http: HttpClient) {
    super();
  }
  async getTodos(): Promise<TodoModel[]> {
    return this.http.get<TodoModel[]>(environment.backendUrl).toPromise();
  }
}
