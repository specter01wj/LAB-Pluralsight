import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
  	WelcomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  exports: []
})
export class WelcomeModule { }
