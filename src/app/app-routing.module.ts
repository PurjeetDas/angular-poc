import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/yard-view' },
  { path: 'yard-view', loadChildren: () => import('./yard-view/yard-view.module').then(m => m.YardViewModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/yard-view' }];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
