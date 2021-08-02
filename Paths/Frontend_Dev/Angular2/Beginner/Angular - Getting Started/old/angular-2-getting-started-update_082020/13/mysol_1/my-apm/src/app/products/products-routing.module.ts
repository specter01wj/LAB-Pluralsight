import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductDetailGuard } from './product-detail/product-detail.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
    ]
  },
  { path: ':id', 
  	canActivate: [ProductDetailGuard], 
  	component: ProductDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
