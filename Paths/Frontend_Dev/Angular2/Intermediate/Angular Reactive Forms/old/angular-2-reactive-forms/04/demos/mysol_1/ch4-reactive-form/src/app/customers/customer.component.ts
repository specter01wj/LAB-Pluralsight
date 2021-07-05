import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Customer } from '../services/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
	customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  	// this.customerForm = new FormGroup({
    this.customerForm = this.fb.group({
      firstName: '',
      // lastName: '',
      lastName: [{value: 'n/a', disabled: true}],
      email: '',
      sendCatalog: true
    });
  }

  setTestData(): void {
    this.customerForm.setValue({
      firstName: 'Tim',
      lastName: 'Wilson',
      email: 'tw21@gmail.com',
      sendCatalog: true
    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      sendCatalog: false
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
