import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from "./index";

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('appModalTrigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $ : any) { 
  	this.el = ref.nativeElement;
  }


  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
      // this.$('#simple-modal').modal({});
    })
  }

}
