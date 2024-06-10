"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CartService = /** @class */ (function () {
    function CartService(http) {
        var _this = this;
        this.http = http;
        this.cart = new rxjs_1.BehaviorSubject([]);
        this.http.get('/api/cart').subscribe({
            next: function (cart) { return _this.cart.next(cart); }
        });
    }
    CartService.prototype.getCart = function () {
        return this.cart.asObservable();
    };
    CartService.prototype.add = function (product) {
        var currentCart = this.cart.value;
        if (!Array.isArray(currentCart)) {
            currentCart = [];
        }
        var newCart = __spreadArrays(currentCart, [product]);
        this.cart.next(newCart);
        this.http.post('/api/cart', newCart).subscribe(function () {
            console.log('added ' + product.name + ' to cart!');
        });
    };
    CartService.prototype.remove = function (product) {
        var newCart = this.cart.getValue().filter(function (i) { return i !== product; });
        this.cart.next(newCart);
        this.http.post('/api/cart', newCart).subscribe(function () {
            console.log('removed ' + product.name + ' from cart!');
        });
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
