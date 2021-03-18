import { Injectable } from '@angular/core';
import { TodoModel } from '../../../../core/model/todo.model';
import { AbstractGetTodosDataSource } from './abstract.get.todos.data.source';

@Injectable()
export class GetTodosDataSource extends AbstractGetTodosDataSource {
    async getTodos(): Promise<TodoModel[]> {
        console.log('hello from data source');
        return new Array<TodoModel>();
    }
}
