import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

import { JQ_TOKEN } from "./jQuery.service";

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.less']
})
export class SimpleModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
