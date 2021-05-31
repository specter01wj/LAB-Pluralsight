import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
