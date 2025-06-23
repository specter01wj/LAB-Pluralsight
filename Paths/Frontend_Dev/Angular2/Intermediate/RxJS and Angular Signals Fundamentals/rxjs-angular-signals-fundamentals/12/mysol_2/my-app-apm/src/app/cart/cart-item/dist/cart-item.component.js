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
exports.CartItemComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var cart_service_1 = require("../cart.service");
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent() {
        var _this = this;
        this.cartService = core_1.inject(cart_service_1.CartService);
        this.item = core_1.signal(undefined);
        // Quantity available (hard-coded to 8)
        // Mapped to an array from 1-8
        this.qtyArr = __spreadArrays(Array(8).keys()).map(function (x) { return x + 1; });
        // Calculate the extended price
        // exPrice = this.cartItem?.quantity * this.cartItem?.product.price;
        this.exPrice = core_1.computed(function () { return _this.item().quantity * _this.item().product.price; });
    }
    Object.defineProperty(CartItemComponent.prototype, "cartItem", {
        set: function (ci) {
            this.item.set(ci);
        },
        enumerable: false,
        configurable: true
    });
    CartItemComponent.prototype.onQuantitySelected = function (quantity) {
        this.cartService.updateQuantity(this.item(), Number(quantity));
    };
    CartItemComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.item());
    };
    __decorate([
        core_1.Input({ required: true })
    ], CartItemComponent.prototype, "cartItem");
    CartItemComponent = __decorate([
        core_1.Component({
            selector: 'sw-cart-item',
            standalone: true,
            imports: [common_1.CurrencyPipe, forms_1.FormsModule, common_1.NgFor, common_1.NgIf],
            templateUrl: './cart-item.component.html'
        })
    ], CartItemComponent);
    return CartItemComponent;
}());
exports.CartItemComponent = CartItemComponent;
