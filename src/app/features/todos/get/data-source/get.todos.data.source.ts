import { Injectable } from '@angular/core';
import { TodoModel } from '../../../../core/model/todo.model';
import { AbstractGetTodosDataSource } from './abstract.get.todos.data.source';

@Injectable()
export class GetTodosDataSource extends AbstractGetTodosDataSource {
  async getTodos(): Promise<TodoModel[]> {
    const todoModels: TodoModel[] = [
      { title: 'Todo1' },
      { title: 'Todo2' },
      { title: 'Todo3' },
    ];
    return todoModels;
  }
}
