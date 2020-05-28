import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

import { JQ_TOKEN } from "./jQuery.service";

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.less']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalcontainer', {static: true}) containerEl: ElementRef;


  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if(this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      // console.log(this.$);
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
