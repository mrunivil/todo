import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AppStateModule } from "../../state/app/app.state.module";
import { NgxsModule } from '@ngxs/store';
import { HomePageState } from 'src/app/state/home/home.state';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomePage],
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
    NgxsModule.forFeature([HomePageState])
  ]
})
export class HomePageModule { }
