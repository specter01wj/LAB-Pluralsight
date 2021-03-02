import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ConvertToSpacesPipe } from '../service/convert-to-spaces.pipe';

@NgModule({
  declarations: [
  	ProductsComponent,
  	ProductDetailComponent,
  	ConvertToSpacesPipe









  	
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
