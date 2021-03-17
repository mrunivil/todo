import { AbstractError } from "../../../../core/error/abstract.error";
import { TodoModel } from "../../../../core/model/todo.model";
import { IRepository } from "../../../../core/repository";
import { AbstractSaveToDoDataSource } from "../data/abstract.save.todo.data.source";

export abstract class AbstractSaveToDoRepository implements IRepository {
    public abstract createToDo(newToDo: TodoModel): AbstractError | void;
}