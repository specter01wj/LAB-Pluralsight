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
var coffee_list_component_1 = require("./components/coffee-list/coffee-list.component");
var router_1 = require("@angular/router");
var App = /** @class */ (function () {
    function App() {
        this.title = core_1.signal('my-coffee-palooza');
    }
    App = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [router_1.RouterOutlet, coffee_list_component_1.CoffeeListComponent],
            templateUrl: './app.html',
            styleUrl: './app.scss'
        })
    ], App);
    return App;
}());
exports.App = App;
