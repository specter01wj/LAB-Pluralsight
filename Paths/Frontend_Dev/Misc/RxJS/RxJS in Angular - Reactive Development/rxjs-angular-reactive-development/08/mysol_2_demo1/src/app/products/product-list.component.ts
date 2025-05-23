import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { EMPTY, Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;
  selectedCategoryId = 1;

  // products: Product[] = [];
  // products$: Observable<Product[]>;
  // products$ = this.productService.products$
  products$ = this.productService.productsWithCategory$
                .pipe(
                  catchError(err => {
                    this.errorMessage = err;
                    // return of([]);
                    return EMPTY;
                  })
                );;
  sub: Subscription;

  productsSimpleFilter$ = this.productService.productsWithCategory$
    .pipe(
      map(products =>
        products.filter(product =>
          this.selectedCategoryId ? product.categoryId === this.selectedCategoryId : true
        )
      )
    );

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
