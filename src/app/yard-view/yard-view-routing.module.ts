import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YardViewComponent } from './yard-view.component';
import { YardMapComponent } from './yard-map/yard-map.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";




const routes: Routes = [
  { path: '', component: YardViewComponent }
];

@NgModule({
  declarations: [YardViewComponent,YardMapComponent],
  imports: [RouterModule.forChild(routes),CardModule,SharedModule,FormsModule],
  exports: [RouterModule, CardModule, SharedModule,FormsModule]
})
export class YardRoutingModule { 

  static components = [ YardViewComponent, YardMapComponent ];

}
