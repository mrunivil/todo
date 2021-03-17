import { Injectable } from "@angular/core";
import { DefaultHomePageStateModel } from "./model/default.home.page.state.model";
import { HomePageStateModel } from "./model/home.state.model";
import { State } from "@ngxs/store";

@State<HomePageStateModel>({
  name: 'Home',
  defaults: DefaultHomePageStateModel
})
@Injectable()
export class HomePageState { }
