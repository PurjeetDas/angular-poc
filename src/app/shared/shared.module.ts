import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMapModule } from './custom-map/custom-map.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomMapModule
    
  ],
  exports: [CustomMapModule]
})
export class SharedModule { }
