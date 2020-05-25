import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMapLeafletComponent } from './custom-map-leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';


@NgModule({
  declarations: [CustomMapLeafletComponent],
  exports: [CustomMapLeafletComponent,LeafletModule,ToastModule],
  imports: [
    CommonModule,LeafletModule,ToastModule
  ],
  providers: [ MessageService]
})
export class CustomMapLeafletModule { }
