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
        var _a, _b;
        this.cartService = core_1.inject(cart_service_1.CartService);
        // Quantity available (hard-coded to 8)
        // Mapped to an array from 1-8
        this.qtyArr = __spreadArrays(Array(8).keys()).map(function (x) { return x + 1; });
        // Calculate the extended price
        this.exPrice = ((_a = this.cartItem) === null || _a === void 0 ? void 0 : _a.quantity) * ((_b = this.cartItem) === null || _b === void 0 ? void 0 : _b.product.price);
    }
    CartItemComponent.prototype.onQuantitySelected = function (quantity) {
        this.cartService.updateQuantity(this.cartItem, Number(quantity));
    };
    CartItemComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.cartItem);
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
