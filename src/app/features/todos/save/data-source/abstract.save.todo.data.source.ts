import { Injectable } from "@angular/core";
import { IDataSource } from "../../../../core/data.source";
import { TodoModel } from "../../../../core/model/todo.model";
@Injectable()
export abstract class AbstractSaveToDoDataSource implements IDataSource {
    public abstract createTodo(newToDo: TodoModel): void;
}