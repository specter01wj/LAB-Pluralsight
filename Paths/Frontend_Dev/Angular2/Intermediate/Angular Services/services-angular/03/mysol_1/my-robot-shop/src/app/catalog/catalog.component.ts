import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from '@core/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  // products: Product[] = [];
  products: Observable<Product[]> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    /* this.productsService.getProducts().subscribe(
      (products) => this.products = products
    ); */
    /* setTimeout(() =>
      this.productsService.refreshProducts(), 1000
    ); */
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
