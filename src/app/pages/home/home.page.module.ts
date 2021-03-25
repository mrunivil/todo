import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeStateModule } from '../../state/home/home.state.module';
import { TodoListComponentModule } from '../components/todo.list.component.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    HomeStateModule,
    TodoListComponentModule,
  ],
})
export class HomePageModule {}
