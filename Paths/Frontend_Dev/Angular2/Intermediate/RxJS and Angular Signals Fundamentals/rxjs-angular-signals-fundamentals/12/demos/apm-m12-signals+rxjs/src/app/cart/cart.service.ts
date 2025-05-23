import { Injectable, computed, effect, signal } from "@angular/core";
import { CartItem } from "./cart";
import { Product } from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Manage state with signals
  cartItems = signal<CartItem[]>([]);

  // Number of items in the cart
  cartCount = computed(() => this.cartItems()
    .reduce((accQty, item) => accQty + item.quantity, 0)
  );

  // Total up the extended price for each item
  subTotal = computed(() => this.cartItems().reduce((accTotal, item) =>
    accTotal + (item.quantity * item.product.price), 0));

  // Delivery is free if spending more than $50
  deliveryFee = computed<number>(() => this.subTotal() < 50 ? 5.99 : 0);

  // Tax could be based on shipping address zip code
  tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);

  // Total price
  totalPrice = computed(() => this.subTotal() + this.deliveryFee() + this.tax());

  eLength = effect(() => console.log('Cart array length', this.cartItems().length));

  // Add the vehicle to the cart
  // If the item is already in the cart, increase the quantity
  addToCart(product: Product): void {
    const index = this.cartItems().findIndex(item =>
      item.product.id === product.id);
    if (index === -1) {
      // Not already in the cart, so add with default quantity of 1
      this.cartItems.update(items => [...items, { product, quantity: 1 }]);
    } else {
      // Already in the cart, so increase the quantity by 1
      this.cartItems.update(items =>
        [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity + 1 },
          ...items.slice(index + 1)
        ]);
    }
  }

  // Remove the item from the cart
  removeFromCart(cartItem: CartItem): void {
    // Update the cart with a new array containing
    // all but the filtered out deleted item
    this.cartItems.update(items => 
      items.filter(item => item.product.id !== cartItem.product.id));
  }

  // Update the cart quantity
  updateQuantity(cartItem: CartItem, quantity: number): void {
    // Update the cart with a new array containing
    // the updated item and all other original items
    this.cartItems.update(items =>
      items.map(item => item.product.id === cartItem.product.id ?
        { ...item, quantity } : item));
  }
}
