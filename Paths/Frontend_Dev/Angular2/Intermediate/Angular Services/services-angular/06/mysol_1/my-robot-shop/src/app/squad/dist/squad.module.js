"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SquadModule = void 0;
var core_1 = require("@angular/core");
var shared_module_1 = require("@shared/shared.module");
var squad_routing_module_1 = require("./squad-routing.module");
var squad_catalog_component_1 = require("./squad-catalog/squad-catalog.component");
var cart_service_1 = require("@core/cart.service");
var SquadModule = /** @class */ (function () {
    function SquadModule() {
    }
    SquadModule = __decorate([
        core_1.NgModule({
            declarations: [squad_catalog_component_1.SquadCatalogComponent],
            imports: [shared_module_1.SharedModule, squad_routing_module_1.SquadRoutingModule],
            providers: [
                {
                    provide: cart_service_1.CART_OPTIONS_TOKEN,
                    useValue: { persistenceType: 'local', persistenceKey: 'squad-cart' },
                    multi: true
                },
                {
                    provide: cart_service_1.CART_OPTIONS_TOKEN,
                    useValue: { persistenceType: 'none', persistenceKey: 'squad-cart' },
                    multi: true
                },
                // CartService,
                {
                    provide: cart_service_1.CartService,
                    useFactory: function (cartOptions) { return new cart_service_1.CartService(cartOptions); },
                    deps: [cart_service_1.CART_OPTIONS_TOKEN],
                    multi: false
                },
            ]
        })
    ], SquadModule);
    return SquadModule;
}());
exports.SquadModule = SquadModule;
