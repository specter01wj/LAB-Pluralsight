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
exports.ProductService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_error_service_1 = require("../utilities/http-error.service");
var review_service_1 = require("../reviews/review.service");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.productsUrl = 'api/products';
        this.http = core_1.inject(http_1.HttpClient);
        this.errorService = core_1.inject(http_error_service_1.HttpErrorService);
        this.reviewService = core_1.inject(review_service_1.ReviewService);
        this.productSelectedSubject = new rxjs_1.BehaviorSubject(undefined);
        this.productSelected$ = this.productSelectedSubject.asObservable();
        this.products$ = this.http.get(this.productsUrl)
            .pipe(rxjs_1.tap(function (p) { return console.log(JSON.stringify(p)); }), rxjs_1.shareReplay(1), rxjs_1.catchError(function (err) { return _this.handleError(err); }));
        this.product$ = this.productSelected$
            .pipe(rxjs_1.filter(Boolean), rxjs_1.switchMap(function (id) {
            var productUrl = _this.productsUrl + '/' + id;
            return _this.http.get(productUrl)
                .pipe(rxjs_1.switchMap(function (product) { return _this.getProductWithReviews(product); }), rxjs_1.catchError(function (err) { return _this.handleError(err); }));
        }));
    }
    ProductService.prototype.getProductWithReviews = function (product) {
        if (product.hasReviews) {
            return this.http.get(this.reviewService.getReviewUrl(product.id))
                .pipe(rxjs_1.map(function (reviews) { return (__assign(__assign({}, product), { reviews: reviews })); }));
        }
        else {
            return rxjs_1.of(product);
        }
    };
    ProductService.prototype.productSelected = function (selectedProductId) {
        this.productSelectedSubject.next(selectedProductId);
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
