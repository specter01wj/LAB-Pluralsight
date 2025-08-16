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
exports.SquadCatalogComponent = void 0;
var core_1 = require("@angular/core");
var products_service_interface_1 = require("@shared/products-service.interface");
var SquadCatalogComponent = /** @class */ (function () {
    // private cart: Product[] = [];
    function SquadCatalogComponent(cartService, engineersService) {
        this.cartService = cartService;
        this.engineersService = engineersService;
        this.squad = this.engineersService.getProducts();
    }
    SquadCatalogComponent.prototype.addToCart = function (engineer) {
        this.cartService.add(engineer);
    };
    SquadCatalogComponent = __decorate([
        core_1.Component({
            selector: 'bot-catalog',
            templateUrl: './squad-catalog.component.html',
            styleUrls: ['./squad-catalog.component.css'],
            providers: []
        }),
        __param(1, core_1.Inject(products_service_interface_1.IProductsServiceToken))
    ], SquadCatalogComponent);
    return SquadCatalogComponent;
}());
exports.SquadCatalogComponent = SquadCatalogComponent;
