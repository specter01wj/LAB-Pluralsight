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
var cart_component_1 = require("@shared/cart/cart.component");
var catalog_component_1 = require("@catalog/catalog.component");
var search_component_1 = require("@catalog/search/search.component");
var routes = [
    { path: 'catalog', component: catalog_component_1.CatalogComponent, title: "Catalog - Joe's Robot Shop" },
    { path: 'search', component: search_component_1.SearchComponent, title: "Search - Joe's Robot Shop" },
    { path: 'cart', component: cart_component_1.CartComponent, title: "Cart - Joe's Robot Shop" },
    { path: 'squad', loadChildren: function () { return Promise.resolve().then(function () { return require('./squad/squad.module'); }).then(function (m) { return m.SquadModule; }); } },
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
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
