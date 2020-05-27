import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from '../services/product-data';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
  	ProductDetailComponent, 
  	ProductEditComponent, 
  	ProductListComponent, ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    ProductsRoutingModule
  ]
})
export class ProductModule { }
