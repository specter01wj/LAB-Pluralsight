import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.less']
})
export class CriteriaComponent implements OnInit {
  listFilter: string;

  @ViewChild('filterElement') filterElementRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
