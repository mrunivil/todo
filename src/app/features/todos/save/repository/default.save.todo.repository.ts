import { Injectable } from "@angular/core";
import { AbstractError } from "../../../../core/error/abstract.error";
import { GenericError } from "../../../../core/error/generic.error";
import { TodoModel } from "../../../../core/model/todo.model";
import { AbstractSaveToDoDataSource } from "../data-source/abstract.save.todo.data.source";
import { AbstractSaveToDoRepository } from "./abstract.save.todo.repository";
@Injectable()
export class DefaultSaveToDoRepository extends AbstractSaveToDoRepository {
    constructor(readonly dataSource: AbstractSaveToDoDataSource) {
        super();
    }
    createToDo(newToDo: TodoModel): void | AbstractError {
        try {
            this.dataSource.createTodo(newToDo);
        } catch (error) {
            return new GenericError();
        }
    }
}
