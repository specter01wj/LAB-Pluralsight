"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(CartComponent.prototype, "cartItems", {
        get: function () {
            return this.cartService.cart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CartComponent.prototype, "cartTotal", {
        get: function () {
            return this.cartService.cartTotal;
        },
        enumerable: false,
        configurable: true
    });
    CartComponent.prototype.removeFromCart = function (product) {
        this.cartService.remove(product);
    };
    CartComponent.prototype.getImageUrl = function (product) {
        if (!product)
            return '';
        return '/assets/images/robot-parts/' + product.imageName;
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'bot-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
