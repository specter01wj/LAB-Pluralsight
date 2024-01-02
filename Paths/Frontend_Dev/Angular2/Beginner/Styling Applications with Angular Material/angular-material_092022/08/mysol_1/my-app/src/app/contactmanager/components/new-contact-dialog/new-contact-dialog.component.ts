import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrl: './new-contact-dialog.component.scss'
})
export class NewContactDialogComponent {


  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
  ) {}

  save() {

  }

  dismiss() {
  }

}
