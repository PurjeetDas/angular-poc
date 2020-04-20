import { Component, OnInit , OnDestroy ,ChangeDetectorRef } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ITraceable } from '../shared/interfaces';
import { LoggerService } from '../core/services/logger.service';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { JsonPipe } from '@angular/common';

declare var google: any;
@Component({
  selector: 'app-yard-view',
  templateUrl: './yard-view.component.html'
})
export class YardViewComponent implements OnInit,OnDestroy {

  private subscription: Subscription;
  traceableEntities:ITraceable[]=[];
  overlays: any[] =[];
  yardName: string ="";
  msg: any;
  topicname: string= "testtopic/1";
  traceablemap:Map<string,object> = new Map<string,object>();


  constructor(
      private dataService: DataService,
      private logger: LoggerService,
      private _mqttService: MqttService,
      private cd: ChangeDetectorRef) {
        this.getTraceableEntities();
       }

  subscribeTopic(): void {
        console.log('inside subscribe new topic')
        this.subscription = this._mqttService.observe(this.topicname).subscribe((message: IMqttMessage) => {
          const input = message.payload.toString();
          let obj:ITraceable = JSON.parse(input);
          this.setToTraceableMap(obj);
          this.setOverlays();  
        });
        this.logger.log('subscribed to topic: ' + this.topicname)
   }


  ngOnInit() {
   this.subscribeTopic();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setOverlays(){
    this.overlays = [];
    this.traceablemap.forEach((value: any, key: string) => {
      this.overlays.push(value);
    })
    this.cd.detectChanges();
  }
  
  setToTraceableMap(data:ITraceable){
   
    this.traceablemap.set(data.name,new google.maps.Marker
      ({position: 
        {
          lat: data.gps.latitude,
          lng: data.gps.longitude,
        },
          title: data.name
        }
      ));

  }
  
  getTraceableEntities(){
    this.dataService.getTraceableEntities()
    .subscribe((response: ITraceable[]) => {             
        for (var data of response) {
          this.yardName = data.location;
          this.setToTraceableMap(data);
         }
         this.setOverlays();       
    },
    (err: any) => this.logger.log(err),
    () => this.logger.log('traceable entities retrived '));
  }

  sendmsg(): void {
    let obj:ITraceable = JSON.parse(this.msg);
    //console.log("Name"+obj.name);
    this._mqttService.unsafePublish(this.topicname, JSON.stringify(obj), { qos: 1, retain: true })
    this.msg = ''
  }
  
 

}