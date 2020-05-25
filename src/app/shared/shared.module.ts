import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMapModule } from './custom-map/custom-map.module';
import { CustomMapLeafletModule } from './custom-map-leaflet/custom-map-leaflet.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomMapModule,
    CustomMapLeafletModule
    
  ],
  exports: [CustomMapModule,CustomMapLeafletModule]
})
export class SharedModule { }
