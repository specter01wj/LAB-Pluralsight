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
var rxjs_interop_1 = require("@angular/core/rxjs-interop");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'toSignal_app';
        this.o$ = rxjs_1.of(1, 2, 3, 4);
        this.o1$ = rxjs_1.of(1, 2, 3, 4).pipe(rxjs_1.delay(this.randomDelay()));
        this.s = rxjs_interop_1.toSignal(this.o$, { initialValue: 0 });
        this.s1 = rxjs_interop_1.toSignal(this.o1$, { initialValue: 0 });
        core_1.effect(function () {
            console.log('Signal value:', _this.s());
        });
        core_1.effect(function () {
            console.log('Signal value:', _this.s1());
        });
    }
    AppComponent.prototype.randomDelay = function () {
        return Math.floor(Math.random() * 1000) + 500;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [router_1.RouterOutlet],
            templateUrl: './app.component.html',
            styleUrl: './app.component.scss'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
