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
    function CatalogComponent(productsService, cartService) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.products = [];
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (products) { return _this.products = products; });
        setTimeout(function () {
            return _this.productsService.refreshProducts();
        }, 3000);
    };
    CatalogComponent.prototype.addToCart = function (product) {
        this.cartService.add(product);
    };
    CatalogComponent = __decorate([
        core_1.Component({
            selector: 'bot-catalog',
            templateUrl: './catalog.component.html',
            styleUrls: ['./catalog.component.css']
        })
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
