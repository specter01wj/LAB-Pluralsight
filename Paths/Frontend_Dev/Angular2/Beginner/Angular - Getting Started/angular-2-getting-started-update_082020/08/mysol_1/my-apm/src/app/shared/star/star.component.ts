import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.less']
})
export class StarComponent implements OnInit {
	@Input() rating: number;
	starWidth: number;



  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

}
