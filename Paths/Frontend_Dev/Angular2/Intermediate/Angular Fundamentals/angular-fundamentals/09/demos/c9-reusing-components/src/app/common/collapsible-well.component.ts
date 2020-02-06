import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.less']
})
export class CollapsibleWellComponent implements OnInit {
	@Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
