import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
	{
    path: 'login',
    component: LoginComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [
  	CommonModule,
  	RouterModule.forChild(routes),
  	FormsModule,
    SharedModule
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
