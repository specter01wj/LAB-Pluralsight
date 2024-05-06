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
    CartService.prototype.getTotalPrice = function () {
        return (Math.round(this.cart.reduce(function (prev, cur) {
            return (prev + cur.qty * (cur.product.price * (1 - cur.product.discount)));
        }, 0) * 100) / 100);
    };
    CartService.prototype.findLineItem = function (product) {
        return this.cart.find(function (li) { return li.product.id === product.id; });
    };
    CartService.prototype.add = function (product) {
        var lineItem = this.findLineItem(product);
        if (lineItem !== undefined) {
            lineItem.qty++;
        }
        else {
            lineItem = { product: product, qty: 1 };
            this.cart.push(lineItem);
        }
        console.log('added ' + product.name + ' to cart!');
        console.log('Total Price: $' + this.getTotalPrice());
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
