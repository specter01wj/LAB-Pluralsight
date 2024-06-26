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
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCart().subscribe({
            next: function (cart) { return (_this.cart = cart); }
        });
    };
    Object.defineProperty(CartComponent.prototype, "cartItems", {
        get: function () {
            return this.cart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CartComponent.prototype, "cartTotal", {
        get: function () {
            return this.cart.reduce(function (prev, next) {
                var discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
                return prev + next.price * discount;
            }, 0);
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
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrl: './cart.component.scss'
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
