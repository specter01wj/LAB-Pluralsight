"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var catalog_component_1 = require("./catalog/catalog.component");
var cart_component_1 = require("./cart/cart.component");
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent, title: "Home - Joe's Robot Shop" },
    { path: 'catalog', component: catalog_component_1.CatalogComponent, title: "Catalog - Joe's Robot Shop" },
    { path: 'cart', component: cart_component_1.CartComponent, title: "Cart - Joe's Robot Shop" },
    { path: 'sign-in', component: sign_in_component_1.SignInComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
