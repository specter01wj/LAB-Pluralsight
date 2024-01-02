import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrl: './new-contact-dialog.component.scss'
})
export class NewContactDialogComponent implements OnInit {
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;

  name = new FormControl('', [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.user = new User();
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  save() {

  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
