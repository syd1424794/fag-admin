import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard-module/dashboard-module.module').then(m => m.DashboardModuleModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
