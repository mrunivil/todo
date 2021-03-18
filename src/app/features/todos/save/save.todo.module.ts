import { NgModule } from "@angular/core";
import { AbstractSaveToDoDataSource } from "./data-source/abstract.save.todo.data.source";
import { DefaultSaveToDoDataSource } from "./data/default.save.todo.data.source";
import { AbstractSaveToDoRepository } from "./repository/abstract.save.todo.repository";
import { AbstractSaveToDoUseCase } from "./use-case/abstract.save.todo.use.case";

import { DefaultSaveToDoRepository } from "./repository/default.save.todo.repository";
import { DefaultSaveTodoUseCase } from "./use-case/default.save.todo.use.case";


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
