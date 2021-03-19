import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/core/model';
import {
  HomePageGetToDosAction,
  HomePageDeleteToDoAction,
  HomePageState,
} from '../../state/home/home.state';
import { HomePageViewModel } from './home.page.view.model';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @Select(HomePageState.homePageViewModel)
  $viewModel: Observable<HomePageViewModel>;

  constructor(private readonly store: Store) {}

  pageLoadList() {
    this.store.dispatch(new HomePageGetToDosAction());
  }
  deleteToDo(toDo: TodoModel) {
    this.store.dispatch(new HomePageDeleteToDoAction(toDo));
  }
}
