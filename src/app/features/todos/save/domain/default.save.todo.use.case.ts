import { Injectable } from "@angular/core";
import { AbstractError } from "../../../../core/error/abstract.error";
import { TodoModel } from "../../../../core/model/todo.model";
import { AbstractSaveToDoRepository } from "./abstract.save.todo.repository";
import { AbstractSaveToDoUseCase } from "./abstract.save.todo.use.case";
@Injectable()
export class DefaultSaveTodoUseCase implements AbstractSaveToDoUseCase {
    constructor(private readonly repository: AbstractSaveToDoRepository) { }
    execute(newTodo: TodoModel): void | AbstractError {
        return this.repository.createToDo(newTodo);
    }
}