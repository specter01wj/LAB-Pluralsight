import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../service/event.service';
import { ToastrService } from '../../service/toastr.service';

import { IEvent } from '../service/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.less']
})
export class EventsListComponent implements OnInit {
	events:IEvent[];

  constructor(private eventService: EventService, 
  			  // private toastr: ToastrService, 
  			  private route:ActivatedRoute) { }

  ngOnInit() {
    // let a11 = this.route.snapshot.data;
    this.events = this.route.snapshot.data['events'];
    // this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    // this.toastr.success(eventName);
  }

}
