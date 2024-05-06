import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }




}
