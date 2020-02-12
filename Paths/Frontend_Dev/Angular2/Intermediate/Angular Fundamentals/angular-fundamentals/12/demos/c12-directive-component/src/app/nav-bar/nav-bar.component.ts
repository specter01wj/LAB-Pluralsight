import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service';

import { ISession, EventService } from '../events/index';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }

}
