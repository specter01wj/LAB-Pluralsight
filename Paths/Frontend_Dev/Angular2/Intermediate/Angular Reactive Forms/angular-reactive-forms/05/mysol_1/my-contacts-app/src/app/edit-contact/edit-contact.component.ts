import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { phoneTypeValues, addressTypeValues } from '../contacts/contact.model';
import { restrictedWords } from '../validators/restricted-words.validator';

@Component({
  selector: 'app-edit-contact',
  standalone: false,
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss'
})
export class EditContactComponent implements OnInit {
  phoneTypes = phoneTypeValues;
  addressTypes = addressTypeValues;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.contactForm = this.fb.nonNullable.group({
      id: '',
      personal: false,
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      dateOfBirth: <Date | null>null,
      favoritesRanking: <number | null>null,
      phone: this.fb.nonNullable.group({
        phoneNumber: '',
        phoneType: '',
      }),
      address: this.fb.nonNullable.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required],
        addressType: '',
      }),
      notes: ['', restrictedWords(['foo', 'bar'])],
    });
  }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactsService.getContact(contactId).subscribe((contact) => {
      if (!contact) return;

      this.contactForm!.setValue(contact);
    });
  }

  get firstName() {
    return this.contactForm.controls['firstName'];
  }

  get notes() {
    return this.contactForm.controls['notes'];
  }

  saveContact() {
    this.contactsService.saveContact(this.contactForm!.getRawValue()).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }

}
