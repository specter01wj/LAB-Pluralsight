"use strict";
exports.__esModule = true;
exports.routes = void 0;
var home_component_1 = require("./home/home.component");
var page_not_found_component_1 = require("./utilities/page-not-found.component");
exports.routes = [
    { path: 'welcome', component: home_component_1.HomeComponent },
    {
        path: 'products',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./products/product-list/product-list.component'); }).then(function (c) { return c.ProductListComponent; }); }
    },
    {
        path: 'cart',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./cart/cart-shell/cart-shell.component'); }).then(function (c) { return c.CartShellComponent; }); }
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
