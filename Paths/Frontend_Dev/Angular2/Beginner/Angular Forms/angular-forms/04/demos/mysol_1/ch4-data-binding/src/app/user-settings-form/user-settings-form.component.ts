import { Component, OnInit } from '@angular/core';

import { UserSettings } from '../services/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.less']
})
export class UserSettingsFormComponent implements OnInit {
	originalUserSettings : UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',




    
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };

  userSettings : UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

}
