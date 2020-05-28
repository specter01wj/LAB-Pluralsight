import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';
import { TOASTR_TOKEN, ToastrService } from '../service/toastr.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;

  constructor(private _router: Router, private authService:AuthService,
              @Inject(TOASTR_TOKEN) private toastr: ToastrService) { }

  ngOnInit() {
  	this.firstName = new FormControl(
  		this.authService.currentUser.firstName, 
  		[Validators.required, Validators.pattern('[a-zA-Z].*')]
  	);
    
    this.lastName = new FormControl(
    	this.authService.currentUser.lastName, 
    	Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
      this._router.navigate(['events']);
    }
  }

  onCancel(): void {
    this._router.navigate(['/events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
