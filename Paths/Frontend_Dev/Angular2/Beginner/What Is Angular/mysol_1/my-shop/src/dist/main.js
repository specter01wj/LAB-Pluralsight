"use strict";
exports.__esModule = true;
// import 'zone.js/dist/zone'; // this is used to deal with stackblitz issues
var app_component_1 = require("./app/app.component");
var app_config_1 = require("./app/app.config");
var platform_browser_1 = require("@angular/platform-browser");
platform_browser_1.bootstrapApplication(app_component_1.AppComponent, app_config_1.appConfig)["catch"](function (err) { return console.error(err); });
