import { NgModule } from '@angular/core';
import { AbstractGetTodosDataSource } from './data-source/abstract.get.todos.data.source';
import { GetTodosDataSource } from './data-source/get.todos.data.source';
import { AbstractGetTodosRepository } from './repository/abstract.get.todos.repository';
import { GetTodosRepository } from './repository/get.todos.repository';
import { AbstractGetTodosUseCase } from './use-case/abstract.get.todos.use.case';
import { GetTodosUseCase } from './use-case/get.todos.use.case';

@NgModule({
    providers: [
        {
            provide: AbstractGetTodosUseCase,
            useClass: GetTodosUseCase
        },
        {
            provide: AbstractGetTodosRepository,
            useClass: GetTodosRepository
        },
        {
            provide: AbstractGetTodosDataSource,
            useClass: GetTodosDataSource
        }
    ]
})
export class GetTodosModule { }
