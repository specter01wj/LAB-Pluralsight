import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
	@Input('inRate') rating: number = 0;
	cropWidth: number = 75;
	@Output('clickRate') ratingClicked: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  	this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void {
  	this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
