import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../service/event.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.less']
})
export class EventDetailsComponent implements OnInit {
	event:any;

  constructor(private eventService:EventService, 
  			  private route: ActivatedRoute,
  			  private _router: Router) { }

  ngOnInit() {
  	// let a11 = this.route.snapshot.params['id'];
  	this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  onBack(): void {
    this._router.navigate(['/events']);
  }

}
