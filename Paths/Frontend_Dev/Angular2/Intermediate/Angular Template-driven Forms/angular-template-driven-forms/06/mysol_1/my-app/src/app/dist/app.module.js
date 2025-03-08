"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_routing_module_1 = require("./app-routing.module");
var restricted_words_validator_directive_1 = require("./validators/restricted-words-validator.directive");
var in_memory_contacts_service_1 = require("./contacts/in-memory-contacts.service");
var app_component_1 = require("./app.component");
var edit_contact_component_1 = require("./edit-contact/edit-contact.component");
var contact_list_component_1 = require("./contact-list/contact-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                edit_contact_component_1.EditContactComponent,
                contact_list_component_1.ContactListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                restricted_words_validator_directive_1.RestrictedWordsValidator,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_contacts_service_1.InMemoryContactsApi, { delay: 0 })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
