"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartTotalComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var cart_service_1 = require("../cart.service");
var CartTotalComponent = /** @class */ (function () {
    function CartTotalComponent() {
        this.cartService = core_1.inject(cart_service_1.CartService);
        this.cartItems = this.cartService.cartItems;
        this.subTotal = this.cartService.subTotal;
        this.deliveryFee = this.cartService.deliveryFee;
        this.tax = this.cartService.tax;
        this.totalPrice = this.cartService.totalPrice;
    }
    CartTotalComponent = __decorate([
        core_1.Component({
            selector: 'sw-cart-total',
            templateUrl: './cart-total.component.html',
            standalone: true,
            imports: [common_1.NgIf, common_1.CurrencyPipe]
        })
    ], CartTotalComponent);
    return CartTotalComponent;
}());
exports.CartTotalComponent = CartTotalComponent;
