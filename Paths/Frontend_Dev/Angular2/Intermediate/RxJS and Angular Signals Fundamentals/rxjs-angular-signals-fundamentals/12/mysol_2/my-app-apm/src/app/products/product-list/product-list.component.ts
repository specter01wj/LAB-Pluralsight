import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';
import { catchError, EMPTY, Subscription, tap } from 'rxjs';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgClass, ProductDetailComponent]
})
export class ProductListComponent {
  pageTitle = 'Products';
  errorMessage = '';
  // sub!: Subscription;

  private productService = inject(ProductService);

  // Products
  /* readonly products$ = this.productService.products$
      .pipe(
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        })
      ); */

  products = this.productService.products;

  // products: Product[] = [];

  // Selected product id to highlight the entry
  // selectedProductId: number = 0;
  readonly selectedProductId$ = this.productService.productSelected$;

  onSelected(productId: number): void {
    // this.selectedProductId = productId;
    this.productService.productSelected(productId);
  }
}
