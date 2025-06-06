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
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
        // Just enough here for the template to compile
        this.productId = 0;
        this.errorMessage = '';
        this.productService = core_1.inject(product_service_1.ProductService);
        // Product to display
        this.product = null;
        // Set the page title
        this.pageTitle = this.product ? "Product Detail for: " + this.product.productName : 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var id = changes['productId'].currentValue;
        if (id) {
            this.sub = this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; });
        }
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
    };
    __decorate([
        core_1.Input()
    ], ProductDetailComponent.prototype, "productId");
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'pm-product-detail',
            templateUrl: './product-detail.component.html',
            standalone: true,
            imports: [common_1.NgIf, common_1.NgFor, common_1.CurrencyPipe]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
