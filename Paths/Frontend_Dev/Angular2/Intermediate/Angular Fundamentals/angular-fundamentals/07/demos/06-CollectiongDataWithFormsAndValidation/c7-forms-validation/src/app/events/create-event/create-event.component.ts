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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  
  cancel() {
    this.router.navigate(['/events']);
  }

}
