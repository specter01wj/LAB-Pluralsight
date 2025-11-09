"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Cake = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tailwind_merge_1 = require("tailwind-merge");
var Cake = /** @class */ (function () {
    function Cake() {
        this.baseStyles = "p-4 w-full mx-auto relative border-2 border-gray-200 bg-white";
    }
    Object.defineProperty(Cake.prototype, "featuredStyles", {
        get: function () {
            return this.cake.featured ? "border-4 border-green-500" : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cake.prototype, "saleStyles", {
        get: function () {
            return this.cake.onSale ? "border-4 border-blue-500" : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cake.prototype, "combinedStyles", {
        get: function () {
            return tailwind_merge_1.twMerge(this.baseStyles, this.saleStyles, this.featuredStyles);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], Cake.prototype, "cake");
    Cake = __decorate([
        core_1.Component({
            selector: 'app-cake',
            imports: [common_1.CommonModule],
            templateUrl: './cake.html',
            styleUrl: './cake.scss'
        })
    ], Cake);
    return Cake;
}());
exports.Cake = Cake;
