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
      // this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
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
