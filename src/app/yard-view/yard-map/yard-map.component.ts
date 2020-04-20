import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITraceable } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-yard-map',
  templateUrl: './yard-map.component.html',
  styleUrls: ['./yard-map.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class YardMapComponent implements OnInit {

  
  @Input()overlays: any[];
  
  constructor() { 

  }
  ngOnInit() {
   
  }

}
