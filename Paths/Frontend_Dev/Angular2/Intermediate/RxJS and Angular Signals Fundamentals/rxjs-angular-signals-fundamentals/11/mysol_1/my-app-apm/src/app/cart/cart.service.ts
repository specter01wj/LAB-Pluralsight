import { effect, Injectable, signal } from "@angular/core";
import { CartItem } from "./cart";
import { Product } from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  eLength = effect(() => console.log('Car array length: ', this.cartItems().length));

  addToCart(product: Product): void {
    this.cartItems().push({ product, quantity: 1});
  }

}
