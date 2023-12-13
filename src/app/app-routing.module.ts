import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLoyoutComponent } from './modules/shared/components/main-loyout/main-loyout.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full', },
  {
    path: 'Home',
    loadChildren: () =>
      import('./modules/Home/modules/home.module').then(
        (m) => m.HomeModule
      )
  },
  {
    path: 'dashboard',
    component: MainLoyoutComponent,
    loadChildren: () =>
      import('./modules/Dashboard/modules/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
