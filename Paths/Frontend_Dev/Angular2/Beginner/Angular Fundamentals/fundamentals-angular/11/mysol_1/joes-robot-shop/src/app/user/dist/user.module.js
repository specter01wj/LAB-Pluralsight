"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var template_form_controls_component_1 = require("./template-form-controls/template-form-controls.component");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            declarations: [
                sign_in_component_1.SignInComponent,
                template_form_controls_component_1.TemplateFormControlsComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
