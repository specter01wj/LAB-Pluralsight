"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = [];
    }
    CartService.prototype.add = function (product) {
        this.cart.push(product);
    };
    CartService.prototype.remove = function (product) {
        this.cart = this.cart.filter(function (p) { return p !== product; });
    };
    Object.defineProperty(CartService.prototype, "cartTotal", {
        get: function () {
            return this.cart.reduce(function (prev, next) {
                var discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
                return prev + next.price * discount;
            }, 0);
        },
        enumerable: false,
        configurable: true
    });
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
