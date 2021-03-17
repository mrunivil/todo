import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { IAppStateModel } from "./model/app.state.model";
import { DefaultAppStateModel } from "./model/default.app.state.model";

@State<IAppStateModel>({
    name: 'App',
    defaults: DefaultAppStateModel
})
@Injectable()
export class AppState {

}