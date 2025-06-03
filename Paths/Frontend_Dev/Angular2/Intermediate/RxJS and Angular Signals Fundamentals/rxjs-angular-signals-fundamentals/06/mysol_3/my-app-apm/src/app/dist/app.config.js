"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_data_1 = require("./app-data");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var app_routes_1 = require("./app.routes");
exports.appConfig = {
    providers: [
        core_1.provideZoneChangeDetection({ eventCoalescing: true }),
        http_1.provideHttpClient(),
        core_1.importProvidersFrom(forms_1.FormsModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(app_data_1.AppData, { delay: 1000 })),
        router_1.provideRouter(app_routes_1.routes)
    ]
};
