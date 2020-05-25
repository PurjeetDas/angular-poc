import { Component, OnInit , Input} from '@angular/core';
import { latLng, Map,tileLayer,LeafletMouseEvent} from "leaflet";
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-custom-map-leaflet',
  templateUrl: './custom-map-leaflet.component.html',
  styleUrls: ['./custom-map-leaflet.component.css']
})
export class CustomMapLeafletComponent implements OnInit   {

   mapCenter = latLng(33.796950, -84.445353);
   map = null;
   mapHeight = 400;
   @Input() layers: any[];

  constructor(private messageService: MessageService) {}
  get options(){
    return {
    layers: [
      tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-streets-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicHVyamVldCIsImEiOiJja2E0OHAwZ2Qwcm95M25wbmRmbW9lb3JiIn0.k7AnXISLaZj78kUwdyCjnw'
    })
    ],
    zoom: 17,
    center: latLng(33.797295, -84.444556)
    }
  };

  ngOnInit() {
   
   }



  onMapReady(map: Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  
    this.map = map;

  }

  mapOnClick(evt) {
    this.messageService.add({severity:'success', summary:'GPS Coordinates', detail: evt.latlng});
    //console.log(evt.latlng);
  }

}
