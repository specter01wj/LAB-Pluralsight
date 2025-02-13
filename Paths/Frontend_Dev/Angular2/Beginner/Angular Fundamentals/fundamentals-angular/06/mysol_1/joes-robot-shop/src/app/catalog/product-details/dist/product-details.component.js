"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
        this.buy = new core_1.EventEmitter();
    }
    ProductDetailsComponent.prototype.getImageUrl = function (product) {
        if (!product)
            return '';
        return '/assets/images/robot-parts/' + product.imageName;
    };
    ProductDetailsComponent.prototype.buyButtonClicked = function (product) {
        this.buy.emit(product);
    };
    __decorate([
        core_1.Input()
    ], ProductDetailsComponent.prototype, "product");
    __decorate([
        core_1.Output()
    ], ProductDetailsComponent.prototype, "buy");
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrl: './product-details.component.scss'
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
