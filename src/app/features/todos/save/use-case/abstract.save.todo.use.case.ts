import { Injectable } from "@angular/core";
import { AbstractError } from "../../../../core/error/abstract.error";
import { TodoModel } from "../../../../core/model/todo.model";
import { IUseCase } from "../../../../core/use.case";
@Injectable()
export abstract class AbstractSaveToDoUseCase implements IUseCase<TodoModel, void | AbstractError> {
    public abstract execute(newTodo: TodoModel): void | AbstractError;
}