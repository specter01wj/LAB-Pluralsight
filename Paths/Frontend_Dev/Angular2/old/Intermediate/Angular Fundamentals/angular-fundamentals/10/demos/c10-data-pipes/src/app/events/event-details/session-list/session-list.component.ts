import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ISession } from '../../service/index';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.less']
})
export class SessionListComponent implements OnInit {
  @Input() sessions:ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(filter) {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

}


function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) {
  	return 1;
  } else if(s1.name === s2.name) {
  	return 0;
  } else {
  	return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}

