import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CART_SERVICE_TOKEN, CartService } from '@core/cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService
  ) { }

  ngOnInit() { }

  get cartItems() {
    return this.cartService.cart();
  }

  get cartTotal() {
    return this.cartService.cartTotal();
  }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
