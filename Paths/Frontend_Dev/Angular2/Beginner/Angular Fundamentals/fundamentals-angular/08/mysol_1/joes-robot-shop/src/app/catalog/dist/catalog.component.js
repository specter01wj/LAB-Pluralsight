"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatalogComponent = void 0;
var core_1 = require("@angular/core");
var CatalogComponent = /** @class */ (function () {
    // cart: Product[] = [];
    function CatalogComponent(cartService, productSvc) {
        this.cartService = cartService;
        this.productSvc = productSvc;
        this.products = [];
        this.filter = '';
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productSvc.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    CatalogComponent.prototype.addToCart = function (product) {
        this.cartService.add(product);
    };
    CatalogComponent.prototype.getFilteredProducts = function () {
        var _this = this;
        return this.filter === ''
            ? this.products
            : this.products.filter(function (product) { return product.category === _this.filter; });
    };
    CatalogComponent = __decorate([
        core_1.Component({
            selector: 'bot-catalog',
            templateUrl: './catalog.component.html',
            styleUrls: ['./catalog.component.scss']
        })
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
