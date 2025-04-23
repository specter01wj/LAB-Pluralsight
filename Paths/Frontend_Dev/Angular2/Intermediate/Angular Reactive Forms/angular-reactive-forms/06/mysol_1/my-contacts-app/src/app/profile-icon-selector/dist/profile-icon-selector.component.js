"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileIconSelectorComponent = void 0;
var core_1 = require("@angular/core");
var profile_icon_names_1 = require("./profile-icon-names");
var forms_1 = require("@angular/forms");
var PROFILE_ICON_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return ProfileIconSelectorComponent; }),
    multi: true
};
var ProfileIconSelectorComponent = /** @class */ (function () {
    function ProfileIconSelectorComponent() {
        this.profileIcons = profile_icon_names_1.profileIconNames;
        this.showAllIcons = true;
    }
    ProfileIconSelectorComponent.prototype.writeValue = function (icon) {
        this.selectedIcon = icon;
        if (icon && icon !== '')
            this.showAllIcons = false;
        else
            this.showAllIcons = true;
    };
    ProfileIconSelectorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = function (icon) { fn(icon); };
    };
    ProfileIconSelectorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ProfileIconSelectorComponent.prototype.iconSelected = function (icon) {
        this.showAllIcons = false;
        this.selectedIcon = icon;
        this.onChange(icon);
    };
    ProfileIconSelectorComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-icon-selector',
            standalone: false,
            templateUrl: './profile-icon-selector.component.html',
            styleUrl: './profile-icon-selector.component.scss',
            providers: [PROFILE_ICON_VALUE_ACCESSOR]
        })
    ], ProfileIconSelectorComponent);
    return ProfileIconSelectorComponent;
}());
exports.ProfileIconSelectorComponent = ProfileIconSelectorComponent;
