import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { HomePageState } from "./home.state";

@NgModule({
  imports: [
    NgxsModule.forFeature([HomePageState])
  ]
})
export class HomeStateModule { }
