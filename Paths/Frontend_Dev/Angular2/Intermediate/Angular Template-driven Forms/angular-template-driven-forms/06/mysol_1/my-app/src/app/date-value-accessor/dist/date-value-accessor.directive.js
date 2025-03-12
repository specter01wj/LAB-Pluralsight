"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DateValueAccessorDirective = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DATE_VALUE_PROVIDER = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DateValueAccessorDirective; }),
    multi: true
};
var DateValueAccessorDirective = /** @class */ (function () {
    function DateValueAccessorDirective() {
    }
    DateValueAccessorDirective = __decorate([
        core_1.Directive({
            selector: 'input([type=date])[ngModel],input([type=date])[formControl],input([type=date])[formControlName]'
        })
    ], DateValueAccessorDirective);
    return DateValueAccessorDirective;
}());
exports.DateValueAccessorDirective = DateValueAccessorDirective;
