import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;

  constructor(private _router: Router) { }

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

  onCancel(): void {
    this._router.navigate(['/events']);
  }

}
