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
exports.__esModule = true;
exports.SearchComponent = void 0;
var core_1 = require("@angular/core");
var cart_service_1 = require("@core/cart.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(productsService, cartService) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.products = [];
        this.searchTerm = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (products) { return _this.products = products; });
        /* setTimeout(() =>
          this.productsService.refreshProducts(), 1000
        ); */
    };
    SearchComponent.prototype.addToCart = function (product) {
        this.cartService.add(product);
    };
    SearchComponent.prototype.filter = function (event) {
        this.searchTerm = event.target.value.toLowerCase();
    };
    SearchComponent.prototype.getFilteredProducts = function () {
        var _this = this;
        return this.searchTerm === ''
            ? this.products
            : this.products.filter(function (product) { return product.name.toLowerCase().includes(_this.searchTerm); });
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'bot-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        }),
        __param(1, core_1.Inject(cart_service_1.CART_SERVICE_TOKEN))
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
