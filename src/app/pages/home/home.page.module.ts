import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppStateModule } from '../../state/app/app.state.module';
import { HomeStateModule } from '../../state/home/home.state.module';
import { ToDoListItemComponent } from './components/todo-list/todo-list-item/todo.list.item.component';
import { TodoListComponent } from './components/todo-list/todo.list.component';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage, TodoListComponent, ToDoListItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    AppStateModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    HomeStateModule,
    // NgxsModule.forFeature([HomePageState])
  ],
})
export class HomePageModule {}
