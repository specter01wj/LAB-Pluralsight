import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../service/index';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.less']
})
export class SessionListComponent implements OnInit {
	@Input() sessions:ISession[];


  constructor() { }

  ngOnInit() {
  }

}
