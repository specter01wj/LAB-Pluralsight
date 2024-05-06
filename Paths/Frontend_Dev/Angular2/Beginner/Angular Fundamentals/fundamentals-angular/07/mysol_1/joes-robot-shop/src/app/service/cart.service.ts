import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  getTotalPrice() {
    return (
      Math.round(
        this.cart.reduce<number>((prev, cur) => {
          return (
            prev + cur.qty * (cur.product.price * (1 - cur.product.discount))
          );
        }, 0) * 100
      ) / 100
    );
  }

  findLineItem(product: Product) {
    return this.cart.find((li) => li.product.id === product.id);
  }

  add(product: IProduct) {
    let lineItem = this.findLineItem(product);
    if (lineItem !== undefined) {
      lineItem.qty++;
    } else {
      lineItem = { product: product, qty: 1 };
      this.cart.push(lineItem);
    }

    console.log('added ' + product.name + ' to cart!');
    console.log('Total Price: $' + this.getTotalPrice());
  }




}
