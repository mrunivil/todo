import { TodoModel } from "../../../../core/model/todo.model";
import { AbstractSaveToDoDataSource } from "./abstract.save.todo.data.source";

export class DefaultSaveToDoDataSource extends AbstractSaveToDoDataSource {
    public createTodo(newToDo: TodoModel): void {
        throw new Error("Method not implemented.");
    }
}