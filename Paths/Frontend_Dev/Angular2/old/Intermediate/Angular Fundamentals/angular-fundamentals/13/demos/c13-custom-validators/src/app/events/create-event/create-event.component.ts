import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../service/index';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less']
})
export class CreateEventComponent implements OnInit {
	isDirty:boolean = true;
  newEvent;

  constructor(private router: Router, private eventService:EventService) {
  }

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  
  cancel() {
    this.router.navigate(['/events']);
  }

}
