import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../services/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
	customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

}
