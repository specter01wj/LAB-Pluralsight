import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { phoneTypeValues, addressTypeValues } from '../contacts/contact.model';
import { restrictedWords } from '../validators/restricted-words.validator';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
      icon: '',
      personal: false,
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      dateOfBirth: <Date | null>null,
      favoritesRanking: <number | null>null,
      phones: this.fb.array([this.createPhoneGroup()]),
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
    if (!contactId) {
      this.subscribeToAddressChanges();
      return;
    }

    this.contactsService.getContact(contactId).subscribe((contact) => {
      if (!contact) return;

      for (let i = 1; i < contact.phones.length; i++) {
        this.addPhone();
      }
      this.contactForm.setValue(contact);
      this.subscribeToAddressChanges();
    });
  }

  subscribeToAddressChanges() {
    const addressGroup = this.contactForm.get('address') as FormGroup;
    addressGroup.valueChanges
      .pipe(distinctUntilChanged(this.stringifyCompare))
      .subscribe(() => {
        for (const controlName in addressGroup.controls) {
          addressGroup.get(controlName)?.removeValidators([Validators.required]);
          addressGroup.get(controlName)?.updateValueAndValidity();
        }
      });
    addressGroup.valueChanges
      .pipe(debounceTime(2000), distinctUntilChanged(this.stringifyCompare))
      .subscribe(() => {
        for (const controlName in addressGroup.controls) {
          addressGroup.get(controlName)?.addValidators([Validators.required]);
          addressGroup.get(controlName)?.updateValueAndValidity();
        }
      });
  }

  stringifyCompare(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  createPhoneGroup() {
    const phoneGroup = this.fb.nonNullable.group({
      phoneNumber: '',
      phoneType: '',
      preferred: false,
    });

    phoneGroup.controls.preferred.valueChanges
      .pipe(distinctUntilChanged(this.stringifyCompare))
      .subscribe(value => {
        if (value) {
          phoneGroup.controls.phoneNumber.addValidators([Validators.required]);
        } else {
          phoneGroup.controls.phoneNumber.removeValidators([Validators.required]);
        }
        phoneGroup.controls.phoneNumber.updateValueAndValidity();
      });

    return phoneGroup;
  }

  addPhone() {
    this.phones.push(this.createPhoneGroup());
  }
  get firstName() {
    return this.contactForm.controls['firstName'];
  }

  get notes() {
    return this.contactForm.controls['notes'];
  }

  get phones(): FormArray {
    return this.contactForm.get('phones') as FormArray;
  }

  getPhoneControl(index: number, controlName: string) {
    return (this.phones.at(index) as FormGroup).get(controlName);
  }

  saveContact() {
    this.contactsService.saveContact(this.contactForm!.getRawValue()).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }

}
