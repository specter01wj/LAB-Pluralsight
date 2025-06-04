"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_error_service_1 = require("../utilities/http-error.service");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productsUrl = 'api/products';
        this.http = core_1.inject(http_1.HttpClient);
        this.errorService = core_1.inject(http_error_service_1.HttpErrorService);
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get(this.productsUrl)
            .pipe(rxjs_1.tap(function () { return console.log('In http.get pipeline'); }), rxjs_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        var productUrl = this.productsUrl + '/' + id;
        return this.http.get(productUrl)
            .pipe(rxjs_1.tap(function () { return console.log('In http.get by id pipeline'); }), rxjs_1.catchError(function (err) { return _this.handleError(err); }));
    };
    ProductService.prototype.handleError = function (err) {
        var formattedMessage = this.errorService.formatError(err);
        return rxjs_1.throwError(function () { return formattedMessage; });
        // throw formattedMessage;
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
