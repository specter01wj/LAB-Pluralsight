"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var product_detail_component_1 = require("../product-detail/product-detail.component");
var product_service_1 = require("../product.service");
var rxjs_1 = require("rxjs");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        var _this = this;
        this.pageTitle = 'Products';
        this.errorMessage = '';
        // sub!: Subscription;
        this.productService = core_1.inject(product_service_1.ProductService);
        // Products
        this.products$ = this.productService.products$
            .pipe(rxjs_1.catchError(function (err) {
            _this.errorMessage = err;
            return rxjs_1.EMPTY;
        }));
        // products: Product[] = [];
        // Selected product id to highlight the entry
        this.selectedProductId = 0;
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    ProductListComponent.prototype.onSelected = function (productId) {
        this.selectedProductId = productId;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-product-list',
            templateUrl: './product-list.component.html',
            standalone: true,
            imports: [common_1.AsyncPipe, common_1.NgIf, common_1.NgFor, common_1.NgClass, product_detail_component_1.ProductDetailComponent]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
