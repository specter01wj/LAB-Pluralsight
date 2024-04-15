import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../service/event.service';

import { IEvent, ISession } from '../service/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.less']
})
export class EventDetailsComponent implements OnInit {
	event:IEvent;
  addMode:boolean;

  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService:EventService, 
  			  private route: ActivatedRoute,
  			  private _router: Router) { }

  ngOnInit() {
  	// let a11 = this.route.snapshot.params['id'];
  	// this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    })
  }

  /*onBack(): void {
    this._router.navigate(['/events']);
  }*/

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
