import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { ContactmanagerComponent } from './contactmanager.component';


@NgModule({
  declarations: [
    ContactmanagerComponent
  ],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule
  ]
})
export class ContactmanagerModule { }
