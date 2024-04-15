import { Component, OnInit } from '@angular/core';

import { EventService } from '../service/event.service';
import { ToastrService } from '../service/toastr.service';

// declare let toastr;

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.less']
})
export class EventsListComponent implements OnInit {
  events:any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {
    
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
