import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app-nav',
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
