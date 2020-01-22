import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../service/event.service';
import { ToastrService } from '../../service/toastr.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.less']
})
export class EventsListComponent implements OnInit {
	events:any;

  constructor(private eventService: EventService, 
  			  private toastr: ToastrService, 
  			  private route:ActivatedRoute) { }

  ngOnInit() {
    // let a11 = this.route.snapshot.data;
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
