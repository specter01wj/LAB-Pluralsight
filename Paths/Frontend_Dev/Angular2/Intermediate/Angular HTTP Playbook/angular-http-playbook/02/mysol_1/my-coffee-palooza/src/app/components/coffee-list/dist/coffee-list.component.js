"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoffeeListComponent = void 0;
var core_1 = require("@angular/core");
var coffee_api_service_1 = require("../../services/coffee-api.service");
var rxjs_1 = require("rxjs");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var CoffeeListComponent = /** @class */ (function () {
    function CoffeeListComponent(restApi) {
        this.restApi = restApi;
        this.coffees$ = rxjs_1.of([]);
        this.coffeeToAdd = {};
    }
    CoffeeListComponent.prototype.ngOnInit = function () {
        this.coffees$ = this.restApi.getCoffees();
    };
    CoffeeListComponent.prototype.deleteCoffee = function (id) {
        var _this = this;
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteCoffee(id).subscribe(function (data) {
                // This test API doesn't actually delete the coffee - so we simulate that here.
                _this.coffees$ = _this.coffees$.pipe(rxjs_1.map(function (coffees) { return coffees.filter(function (coffee) { return coffee.id !== id; }); }));
            });
        }
    };
    CoffeeListComponent.prototype.addCoffee = function (coffee) {
        var _this = this;
        this.restApi.createCoffee(coffee).subscribe(function (newCoffee) {
            _this.coffees$ = _this.coffees$.pipe(rxjs_1.map(function (coffees) { return coffees.concat(newCoffee); }), rxjs_1.tap(function () { return _this.coffeeToAdd = {}; }));
        });
    };
    CoffeeListComponent.prototype.editCoffee = function (toUpdate) {
        var _this = this;
        this.restApi.updateCoffee(toUpdate).subscribe(function (updatedCoffee) {
            _this.coffees$ = _this.coffees$.pipe(rxjs_1.map(function (coffees) { return coffees.filter(function (coffee) { return coffee.id !== toUpdate.id; }).concat(__assign(__assign({}, toUpdate), updatedCoffee)); }));
        });
    };
    CoffeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-coffee-list',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.FormsModule],
            providers: [coffee_api_service_1.CoffeeApiService],
            templateUrl: './coffee-list.component.html',
            styleUrls: ['./coffee-list.component.scss']
        })
    ], CoffeeListComponent);
    return CoffeeListComponent;
}());
exports.CoffeeListComponent = CoffeeListComponent;
