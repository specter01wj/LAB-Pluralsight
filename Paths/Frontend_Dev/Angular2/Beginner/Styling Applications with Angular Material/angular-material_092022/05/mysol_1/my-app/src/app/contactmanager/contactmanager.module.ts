import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { ContactmanagerComponent } from './contactmanager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule
  ]
})
export class ContactmanagerModule { }
