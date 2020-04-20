import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMapModule } from 'primeng/gmap';

import { CustomMapComponent } from './custom-map.component';

@NgModule({
  imports: [CommonModule,GMapModule],
  exports: [CustomMapComponent,GMapModule],
  declarations: [CustomMapComponent]
})
export class CustomMapModule { }