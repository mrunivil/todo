import { NgModule } from '@angular/core';
import { AbstractCreateTodosDataSource } from './data-source/abstract.create.todos.data.source';
import { CreateTodosDataSource } from './data-source/create.todos.data.source';
import { AbstractCreateTodosRepository } from './repository/abstract.create.todos.repository';
import { CreateTodosRepository } from './repository/create.todos.repository';
import { AbstractCreateTodosUseCase } from './use-case/abstract.create.todos.use.case';
import { CreateTodosUseCase } from './use-case/create.todos.use.case';

@NgModule({
  providers: [
    { provide: AbstractCreateTodosDataSource, useClass: CreateTodosDataSource },
    {
      provide: AbstractCreateTodosRepository,
      useClass: CreateTodosRepository,
    },
    {
      provide: AbstractCreateTodosUseCase,
      useClass: CreateTodosUseCase,
    },
  ],
})
export class CreateTodosModule {}
