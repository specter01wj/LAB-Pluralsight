import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './edit/product-edit.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductShellListComponent } from './product-shell/product-shell-list.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductShellComponent, ProductShellListComponent, ProductShellDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
