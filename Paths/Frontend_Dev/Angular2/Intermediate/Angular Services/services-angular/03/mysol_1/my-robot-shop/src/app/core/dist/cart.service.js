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
var CartService = /** @class */ (function () {
    function CartService() {
        // cart: Product[] = [];
        this.cart = core_1.signal([]);
    }
    CartService.prototype.add = function (product) {
        // this.cart.push(product);
        this.cart.update(function (oldCart) { return __spreadArrays(oldCart, [product]); });
    };
    CartService.prototype.remove = function (product) {
        // this.cart = this.cart.filter(p => p !== product);
        this.cart.update(function (oldCart) { return oldCart.filter(function (p) { return p !== product; }); });
    };
    Object.defineProperty(CartService.prototype, "cartTotal", {
        get: function () {
            var _this = this;
            /* return this.cart.reduce((prev, next) => {
              let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
              return prev + next.price * discount;
            }, 0); */
            return core_1.computed(function () { return _this.cart().reduce(function (prev, next) {
                var discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
                return prev + next.price * discount;
            }, 0); });
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
