import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateTodosStateModule } from 'src/app/state/create-todos/create.todos.state.module';
import { TodoListComponentModule } from '../components/todo.list.component.module';
import { EditTodoComponentModule } from './components/edit.todo.component.module';
import { CreateTodosPage } from './create.todos.page';

@NgModule({
  declarations: [CreateTodosPage],
  imports: [
    CommonModule,
    IonicModule,
    CreateTodosStateModule,
    TodoListComponentModule,
    EditTodoComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateTodosPage,
      },
    ]),
  ],
})
export class CreateTodosPageModule {}
