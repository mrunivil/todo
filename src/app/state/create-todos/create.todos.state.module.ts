import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CreateTodosModule } from 'src/app/features/todos/create/create.todos.module';
import { CreateTodosPageState } from './create.todos.page.state';

@NgModule({
  imports: [NgxsModule.forFeature([CreateTodosPageState]), CreateTodosModule],
})
export class CreateTodosStateModule {}
