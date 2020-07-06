import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ProductResolverService } from './product-resolver.service';

const routes: Routes = [
	{ path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent, resolve: { resolvedData: ProductResolverService } },
  { path: 'products/:id/edit', component: ProductEditComponent, resolve: { resolvedData: ProductResolverService } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
