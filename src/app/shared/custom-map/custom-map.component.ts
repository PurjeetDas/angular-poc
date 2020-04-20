import { Component, OnInit, Input } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrls: ['./custom-map.component.css']
})
export class CustomMapComponent implements OnInit {

  options: any;
  @Input()overlays: any[];
  infoWindow: any;
  constructor() { }

  ngOnInit() {
    this.options = {
      center: {lat: 33.793415, lng: -84.438487},
      zoom: 18,
      mapTypeId: 'satellite',
      disableDefaultUI: true
  }; 

  this.infoWindow = new google.maps.InfoWindow();
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
        let title = event.overlay.getTitle();
        this.infoWindow.setContent('' + title + '');
        this.infoWindow.open(event.map, event.overlay);
      
    }
}

}
