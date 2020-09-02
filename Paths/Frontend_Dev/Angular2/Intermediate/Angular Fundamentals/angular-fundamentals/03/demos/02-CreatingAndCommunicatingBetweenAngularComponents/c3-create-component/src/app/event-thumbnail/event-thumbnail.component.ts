import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.less']
})
export class EventThumbnailComponent implements OnInit {
	@Input() event:any;
	@Output() eventClick = new EventEmitter();
	someProp: any = "Some Property!";

	constructor() { }

	ngOnInit() {
	}

	handleClickMe() {
		console.log('clicked!');
		this.eventClick.emit(this.event.name);
	}

	logFoo() {
		console.log("Fooo!");
	}

}
