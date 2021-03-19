import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'home',
          loadChildren: () =>
            import('./pages/home/home.page.module').then(
              (m) => m.HomePageModule
            ),
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
        {
          path: '**',
          redirectTo: 'home',
        },
      ],
      { preloadingStrategy: PreloadAllModules }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
