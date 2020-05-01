import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashMainComponent } from './dash-main/dash-main.component';

const routes: Routes = [
  {
    path: '',
    component: DashMainComponent,
    children: [
      {
        path: 'blogs',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
