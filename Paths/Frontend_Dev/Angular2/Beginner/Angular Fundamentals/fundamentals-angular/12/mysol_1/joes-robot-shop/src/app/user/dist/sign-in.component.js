"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignInComponent = void 0;
var core_1 = require("@angular/core");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.credentials = { email: '', password: '' };
        this.signInError = false;
    }
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        this.signInError = false;
        this.userService.signIn(this.credentials).subscribe({
            next: function () { return _this.router.navigate(['/catalog']); },
            error: function () { return (_this.signInError = true); }
        });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrl: './sign-in.component.scss'
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
