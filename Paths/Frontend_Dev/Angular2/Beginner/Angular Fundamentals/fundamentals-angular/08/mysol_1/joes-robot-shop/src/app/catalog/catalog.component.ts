import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filter: string = '';
  // cart: Product[] = [];

  constructor(
    private cartService: CartService,
    private productSvc: ProductService
  ) { }

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: any) => product.category === this.filter);
  }

}
