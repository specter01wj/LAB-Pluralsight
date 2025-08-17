"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CartService = exports.CART_OPTIONS_TOKEN = void 0;
var core_1 = require("@angular/core");
exports.CART_OPTIONS_TOKEN = new core_1.InjectionToken("CART_OPTIONS");
var CartService = /** @class */ (function () {
    // private cartOptions: CartOptions = {
    //   persistenceType: 'local',
    //   persistenceKey: 'cart',
    // };
    function CartService(cartOptions) {
        this.cartOptions = cartOptions;
        this.cartItems = core_1.signal([]);
        if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
            var cartString = localStorage.getItem(this.cartOptions.persistenceKey);
            var cart = cartString ? JSON.parse(cartString) : [];
            this.cartItems.set(cart);
        }
    }
    Object.defineProperty(CartService.prototype, "cart", {
        get: function () {
            return this.cartItems.asReadonly();
        },
        enumerable: false,
        configurable: true
    });
    CartService.prototype.add = function (product) {
        this.cartItems.update(function (oldCart) { return __spreadArrays(oldCart, [product]); });
        this.storeCart();
    };
    CartService.prototype.remove = function (product) {
        this.cartItems.update(function (oldCart) { return oldCart.filter(function (p) { return p !== product; }); });
        this.storeCart();
    };
    CartService.prototype.storeCart = function () {
        if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
            localStorage.setItem(this.cartOptions.persistenceKey, JSON.stringify(this.cartItems()));
        }
    };
    Object.defineProperty(CartService.prototype, "cartTotal", {
        get: function () {
            var _this = this;
            return core_1.computed(function () { return _this.cartItems().reduce(function (prev, next) {
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
        }),
        __param(0, core_1.Inject(exports.CART_OPTIONS_TOKEN))
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
