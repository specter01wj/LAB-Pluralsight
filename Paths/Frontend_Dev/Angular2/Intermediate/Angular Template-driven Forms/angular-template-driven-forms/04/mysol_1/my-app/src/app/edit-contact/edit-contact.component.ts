import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, phoneTypeValues, addressTypeValues } from '../contacts/contact.model';
import { ContactsService } from '../contacts/contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  phoneTypes = phoneTypeValues;
  addressTypes = addressTypeValues;

  contact: Contact = {
    id: '',
    personal: false,
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: 0,
    phone: {
      phoneNumber: '',
      phoneType: '',
    },
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
  ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;
    this.contactsService.getContact(contactId).subscribe((contact) => {
      if (contact) {
        this.contact = contact;
      }
    });
  }

  saveContact(form: NgForm) {
    console.log(form.value);
    this.contactsService.saveContact(form.value).subscribe({
      next: () => this.router.navigate(['/contacts'])
    });
  }
}
