import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { EventService } from '../service/event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService:EventService) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events))
  }
  
}
