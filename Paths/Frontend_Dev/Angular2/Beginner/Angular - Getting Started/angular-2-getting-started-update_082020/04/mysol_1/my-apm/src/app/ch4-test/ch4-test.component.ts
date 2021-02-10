import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch4-test',
  templateUrl: './ch4-test.component.html',
  styleUrls: ['./ch4-test.component.less']
})
export class Ch4TestComponent implements OnInit {
	pageTitle: string = "Acme Product Management";

  constructor() { }

  ngOnInit(): void {
  }

}
