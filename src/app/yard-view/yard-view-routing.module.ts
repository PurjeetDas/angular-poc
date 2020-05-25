import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YardViewComponent } from './yard-view.component';
import { YardMapComponent } from './yard-map/yard-map.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../shared/shared.module';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import {DropdownModule} from 'primeng/dropdown';
import { YardActivityComponent } from './yard-activity/yard-activity.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: YardViewComponent }
];

@NgModule({
  declarations: [YardViewComponent,YardMapComponent,YardActivityComponent],
  imports: [RouterModule.forChild(routes),CardModule,SharedModule,FormsModule,ReactiveFormsModule,HttpClientModule,ButtonModule,DropdownModule],
  exports: [RouterModule, CardModule, SharedModule,FormsModule,ReactiveFormsModule]
})
export class YardRoutingModule { 

  static components = [ YardViewComponent, YardMapComponent, YardActivityComponent];

}
