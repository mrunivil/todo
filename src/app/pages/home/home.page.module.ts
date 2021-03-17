import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxsModule } from '@ngxs/store';
import { HomePageState } from 'src/app/state/home/home.state';
import { AppStateModule } from '../../state/app/app.state.module';
import { HomeStateModule } from '../../state/home/home.state.module';
import { TodoListComponent } from './components/todo-list/todo.list.component';
import { HomePage } from './home.page';

@NgModule({
  declarations: [
    HomePage,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppStateModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    HomeStateModule
    // NgxsModule.forFeature([HomePageState])
  ]
})
export class HomePageModule { }
