"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'signal_app';
        this.quantity = core_1.signal(1);
        this.qtyAvail = core_1.signal([1, 2, 3, 4, 5, 6]);
        this.selectedProduct = core_1.signal({
            id: 5,
            name: "Hammer",
            price: 25
        });
        this.exPrice = this.selectedProduct().price * this.quantity();
        console.log('In constructor: ' + this.quantity());
        core_1.effect(function () { return console.log('In effect: ', _this.quantity()); });
        this.quantity.update(function (q) { return q * 2; });
    }
    AppComponent.prototype.onQuantitySelected = function (qty) {
        this.quantity.set(qty);
        this.quantity.set(67);
        this.quantity.set(42);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterOutlet],
            templateUrl: './app.component.html',
            styleUrl: './app.component.scss'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
