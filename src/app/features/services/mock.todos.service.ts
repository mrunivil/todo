import { Injectable } from '@angular/core';
import { TodoModel } from 'src/app/core/model';

@Injectable({
  providedIn: 'root',
})
export class MockTodosService {
  private todos: TodoModel[] = [];
  constructor() {}
  add(todo: TodoModel): void {
    this.todos.push(todo);
  }
  remove(todo: TodoModel): void {
    this.todos = this.todos.filter((e) => e !== todo);
  }
  getTodos(): TodoModel[] {
    return [...this.todos];
  }
}
