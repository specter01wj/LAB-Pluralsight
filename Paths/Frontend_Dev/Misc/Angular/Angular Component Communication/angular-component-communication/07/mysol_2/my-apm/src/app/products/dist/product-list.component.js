"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var criteria_component_1 = require("../shared/criteria/criteria.component");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, productParameterService) {
        this.productService = productService;
        this.productParameterService = productParameterService;
        this.pageTitle = 'Product List';
        // showImage: boolean;
        this.includeDetail = true;
        this.imageWidth = 50;
        this.imageMargin = 2;
    }
    Object.defineProperty(ProductListComponent.prototype, "showImage", {
        get: function () {
            return this.productParameterService.showImage;
        },
        set: function (value) {
            this.productParameterService.showImage = value;
        },
        enumerable: false,
        configurable: true
    });
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            // this.performFilter(this.parentListFilter);
            _this.filterComponent.listFilter = _this.productParameterService.filterBy;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.onValueChange = function (value) {
        this.productParameterService.filterBy = value;
        this.performFilter(value);
    };
    ProductListComponent.prototype.ngAfterViewInit = function () {
        this.parentListFilter = this.filterComponent.listFilter;
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.performFilter = function (filterBy) {
        if (filterBy) {
            this.filteredProducts = this.products.filter(function (product) {
                return product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            this.filteredProducts = this.products;
        }
    };
    __decorate([
        core_1.ViewChild(criteria_component_1.CriteriaComponent)
    ], ProductListComponent.prototype, "filterComponent");
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.less']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
