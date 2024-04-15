import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../service/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.less']
})
export class EventThumbnailComponent implements OnInit {
	@Input() event:IEvent;

  constructor() { }

  ngOnInit() {
  }
  
  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }

}
