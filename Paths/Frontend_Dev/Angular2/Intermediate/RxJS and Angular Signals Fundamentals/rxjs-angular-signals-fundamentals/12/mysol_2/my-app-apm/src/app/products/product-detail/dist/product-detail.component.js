"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var product_service_1 = require("../product.service");
var cart_service_1 = require("../../cart/cart.service");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
        // errorMessage = '';
        var _this = this;
        this.productService = core_1.inject(product_service_1.ProductService);
        this.cartService = core_1.inject(cart_service_1.CartService);
        // Product to display
        this.product = this.productService.product;
        this.errorMessage = this.productService.productError;
        /* product$ = this.productService.product$
          .pipe(
            catchError(err => {
              this.errorMessage = err;
              return EMPTY;
            })
          ); */
        // Set the page title
        // pageTitle = this.product ? `Product Detail for: ${this.product.productName}` : 'Product Detail';
        // pageTitle = 'ProductDetail';
        this.pageTitle = core_1.computed(function () {
            var _a;
            return _this.product()
                ? "Product Detail for: " + ((_a = _this.product()) === null || _a === void 0 ? void 0 : _a.productName)
                : 'Product Detail';
        });
    }
    ProductDetailComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'pm-product-detail',
            templateUrl: './product-detail.component.html',
            standalone: true,
            imports: [common_1.AsyncPipe, common_1.NgIf, common_1.NgFor, common_1.CurrencyPipe]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
