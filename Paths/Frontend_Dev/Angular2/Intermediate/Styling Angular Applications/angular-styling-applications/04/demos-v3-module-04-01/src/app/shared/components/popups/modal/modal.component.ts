import { Component, Directive } from '@angular/core';

@Directive({ selector: 'saa-modal-content' })
export class ModalContentDirective {}

@Component({
  selector: 'saa-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
    isOpen = false;

    toggleOpenClose(): void {
        this.isOpen = !this.isOpen;
    }
}
