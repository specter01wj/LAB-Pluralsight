import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor(private http: HttpClient) { }

  add(product: Product) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log('added ' + product.name + ' to cart!');
    });
  }




}
