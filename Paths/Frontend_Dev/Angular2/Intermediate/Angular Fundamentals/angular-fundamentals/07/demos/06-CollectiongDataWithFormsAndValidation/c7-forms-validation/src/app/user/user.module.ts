import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component'

@NgModule({
  declarations: [
  	ProfileComponent,
  	LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
