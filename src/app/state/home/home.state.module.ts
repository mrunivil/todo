import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GetTodosModule } from '../../features/todos/get/get.todos.module';
import { HomePageState } from './home.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([HomePageState]),
    GetTodosModule,
  ]
})
export class HomeStateModule { }
