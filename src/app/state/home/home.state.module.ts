import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DeleteTodoModule } from 'src/app/features/todos/delete/delete.todo.module';
import { GetTodosModule } from '../../features/todos/get/get.todos.module';
import { HomePageState } from './home.page.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([HomePageState]),
    GetTodosModule,
    DeleteTodoModule,
  ],
})
export class HomeStateModule {}
