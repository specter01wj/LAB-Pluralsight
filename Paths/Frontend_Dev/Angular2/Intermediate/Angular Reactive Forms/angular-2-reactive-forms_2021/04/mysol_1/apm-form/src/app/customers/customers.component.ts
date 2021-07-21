import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
	customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
  
}
