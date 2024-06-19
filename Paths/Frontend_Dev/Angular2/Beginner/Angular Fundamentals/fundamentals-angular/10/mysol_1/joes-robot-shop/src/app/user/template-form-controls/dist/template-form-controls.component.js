"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TemplateFormControlsComponent = void 0;
var core_1 = require("@angular/core");
var TemplateFormControlsComponent = /** @class */ (function () {
    function TemplateFormControlsComponent() {
        this.textInput = '';
        this.numericInput = 0;
        this.stringInput = '';
        this.numericSelect = 0;
        this.checkboxInput = false;
        this.radioInput = null;
        this.selectOptions = [
            { text: 'Option One', value: 1 },
            { text: 'Option Two', value: 2 },
        ];
    }
    TemplateFormControlsComponent.prototype.ngOnInit = function () { };
    TemplateFormControlsComponent.prototype.getType = function (value) {
        if (value === null || value === undefined)
            return '';
        console.log('ns', this.numericSelect);
        return typeof value;
    };
    TemplateFormControlsComponent = __decorate([
        core_1.Component({
            selector: 'app-template-form-controls',
            templateUrl: './template-form-controls.component.html',
            styleUrl: './template-form-controls.component.scss'
        })
    ], TemplateFormControlsComponent);
    return TemplateFormControlsComponent;
}());
exports.TemplateFormControlsComponent = TemplateFormControlsComponent;
