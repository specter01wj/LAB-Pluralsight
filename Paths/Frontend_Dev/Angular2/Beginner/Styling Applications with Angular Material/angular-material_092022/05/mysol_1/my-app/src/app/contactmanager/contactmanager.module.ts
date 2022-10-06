import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { ContactmanagerComponent } from './contactmanager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule
  ]
})
export class ContactmanagerModule { }
