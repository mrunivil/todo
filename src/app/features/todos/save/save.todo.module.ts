import { NgModule } from "@angular/core";
import { AbstractSaveToDoDataSource } from "./data/abstract.save.todo.data.source";
import { DefaultSaveToDoDataSource } from "./data/default.save.todo.data.source";
import { AbstractSaveToDoRepository } from "./domain/abstract.save.todo.repository";
import { AbstractSaveToDoUseCase } from "./domain/abstract.save.todo.use.case";
import { DefaultSaveToDoRepository } from "./domain/default.save.todo.repository";
import { DefaultSaveTodoUseCase } from "./domain/default.save.todo.use.case";


@NgModule({
    providers: [
        {
            provide: AbstractSaveToDoDataSource,
            useFactory: () => {
                return new DefaultSaveToDoDataSource();
            }
        },
        {
            provide: AbstractSaveToDoRepository,
            useClass: DefaultSaveToDoRepository
        },
        {
            provide: AbstractSaveToDoUseCase,
            useClass: DefaultSaveTodoUseCase
        }
    ]
})
export class SaveTodoModule { }