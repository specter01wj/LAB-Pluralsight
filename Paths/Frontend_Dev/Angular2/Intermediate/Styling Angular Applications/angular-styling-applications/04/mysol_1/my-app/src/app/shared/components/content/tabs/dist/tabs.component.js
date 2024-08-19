"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabsComponent = void 0;
var core_1 = require("@angular/core");
var tabs_pane_component_1 = require("./tabs-pane/tabs-pane.component");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) { return tab.active = false; });
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(tabs_pane_component_1.TabsPaneComponent)
    ], TabsComponent.prototype, "tabs");
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'saa-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss']
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
