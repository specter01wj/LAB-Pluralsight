import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<Product[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  getCart(): Observable<Product[]> {
    return this.cart.asObservable();
  }

  add(product: Product) {
    let currentCart = this.cart.value;
    if (!Array.isArray(currentCart)) {
      currentCart = [];
    }
    const newCart = [...currentCart, product];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + product.name + ' to cart!');
    });
  }

  remove(product: Product) {
    let newCart = this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + product.name + ' from cart!');
    });
  }


}
