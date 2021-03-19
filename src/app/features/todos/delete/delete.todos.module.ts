import { NgModule } from '@angular/core';
import { AbstractDeleteTodoDataSource } from './data-source/abstract.delete.todo.data.source';
import { DefaultDeleteTodoDataSource } from './data-source/default.delete.todo.data.source';
import { AbstractDeleteTodoRepository } from './repository/abstract.delete.todo.repository';
import { DefaultDeleteTodoRepository } from './repository/default.delete.todo.repository';
import { AbstractDeleteTodoUseCase } from './use-case/abstract.delete.todo.use.case';
import { DefaultDeleteTodoUseCase } from './use-case/default.delete.todo.use.case';

@NgModule({
  providers: [
    {
      provide: AbstractDeleteTodoDataSource,
      useClass: DefaultDeleteTodoDataSource,
    },
    {
      provide: AbstractDeleteTodoRepository,
      useClass: DefaultDeleteTodoRepository,
    },
    {
      provide: AbstractDeleteTodoUseCase,
      useClass: DefaultDeleteTodoUseCase,
    },
  ],
})
export class DeleteTodoModule {}
