import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { HomePageGetTodosAction, HomePageState } from '../../state/home/home.state';
import { HomePageViewModel } from './home.page.view.model';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  @Select(HomePageState.homePageViewModel) $viewModel: Observable<HomePageViewModel>;

  constructor(private readonly store: Store) { }

  pageLoadList(test: string) {
    console.log(test);
    this.store.dispatch(new HomePageGetTodosAction());
  }
}
