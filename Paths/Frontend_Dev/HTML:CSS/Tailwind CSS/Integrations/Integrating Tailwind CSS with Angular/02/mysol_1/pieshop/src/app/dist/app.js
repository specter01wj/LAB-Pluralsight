"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.App = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cake_1 = require("./cake/cake");
var header_1 = require("./header/header");
var App = /** @class */ (function () {
    function App() {
        this.title = core_1.signal('pieshop');
        this.cakes = [
            { name: 'Original Cheesecake', price: '$32.99', imageFile: '01-cheesecake-original.jpg', featured: false, onSale: true },
            { name: 'Strawberry Cheesecake', price: '$29.99', imageFile: '02-cheesecake-strawberry.jpg', featured: false, onSale: true },
            { name: 'Chocolate Cheesecake', price: '$34.99', imageFile: '03-cheesecake-chocolate.jpg', featured: false, onSale: false },
            { name: 'Birthday Cheesecake', price: '$36.99', imageFile: '04-cheesecake-birthday.jpg', featured: true, onSale: false },
            { name: 'Caramel Cheesecake', price: '$31.99', imageFile: '05-cheesecake-caramel.jpg', featured: true, onSale: true },
            { name: 'Pistachio Cheesecake', price: '$30.99', imageFile: '06-cheesecake-pistachio.jpg', featured: false, onSale: false }
        ];
    }
    App = __decorate([
        core_1.Component({
            selector: 'app-root',
            imports: [router_1.RouterOutlet, header_1.Header, cake_1.Cake],
            templateUrl: './app.html',
            styleUrl: './app.scss'
        })
    ], App);
    return App;
}());
exports.App = App;
