"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        var _this = this;
        this.cartItems = core_1.signal([]);
        this.cartCount = core_1.computed(function () { return _this.cartItems()
            .reduce(function (accQty, item) { return accQty + item.quantity; }, 0); });
        this.subTotal = core_1.computed(function () { return _this.cartItems().reduce(function (accTotal, item) {
            return accTotal + (item.quantity * item.product.price);
        }, 0); });
        this.deliveryFee = core_1.computed(function () { return _this.subTotal() < 50 ? 5.99 : 0; });
        this.tax = core_1.computed(function () { return Math.round(_this.subTotal() * 10.75) / 100; });
        this.totalPrice = core_1.computed(function () { return _this.subTotal() + _this.deliveryFee() + _this.tax(); });
        this.eLength = core_1.effect(function () { return console.log('Car array length: ', _this.cartItems().length); });
    }
    CartService.prototype.addToCart = function (product) {
        // this.cartItems().push({ product, quantity: 1});
        this.cartItems.update(function (item) { return __spreadArrays(item, [{ product: product, quantity: 1 }]); });
    };
    CartService.prototype.removeFromCart = function (cartItem) {
        this.cartItems.update(function (items) {
            return items.filter(function (item) { return item.product.id !== cartItem.product.id; });
        });
    };
    CartService.prototype.updateQuantity = function (cartItem, quantity) {
        this.cartItems.update(function (items) {
            return items.map(function (item) { return item.product.id === cartItem.product.id ? __assign(__assign({}, item), { quantity: quantity }) : item; });
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
