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
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var promo_component_1 = require("./promo/promo.component");
// Content Components
var accordion_component_1 = require("./shared/components/content/accordion/accordion.component");
var accordion_pane_component_1 = require("./shared/components/content/accordion/accordion-pane/accordion-pane.component");
var tabs_component_1 = require("./shared/components/content/tabs/tabs.component");
var tabs_pane_component_1 = require("./shared/components/content/tabs/tabs-pane/tabs-pane.component");
var thumbnail_list_component_1 = require("./shared/components/content/thumbnail-list/thumbnail-list.component");
var message_component_1 = require("./shared/components/content/message/message.component");
// Navigation Components
var navbar_primary_component_1 = require("./shared/components/navigation/navbar-primary/navbar-primary.component");
var navbar_secondary_component_1 = require("./shared/components/navigation/navbar-secondary/navbar-secondary.component");
var pills_component_1 = require("./shared/components/navigation/pills/pills.component");
// PopUp Components
var modal_component_1 = require("./shared/components/popups/modal/modal.component");
var tooltip_component_1 = require("./shared/components/popups/tooltip/tooltip.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                promo_component_1.PromoComponent,
                accordion_component_1.AccordionComponent,
                accordion_pane_component_1.AccordionPaneComponent,
                tabs_component_1.TabsComponent,
                tabs_pane_component_1.TabsPaneComponent,
                message_component_1.MessageComponent,
                message_component_1.MessageTitleDirective,
                message_component_1.MessageContentDirective,
                thumbnail_list_component_1.ThumbnailListComponent,
                navbar_primary_component_1.NavBarPrimaryComponent,
                navbar_secondary_component_1.NavBarSecondaryComponent,
                pills_component_1.PillsComponent,
                modal_component_1.ModalComponent,
                modal_component_1.ModalContentDirective,
                modal_component_1.ModalHighlightDirective,
                tooltip_component_1.ToolTipComponent,
                tooltip_component_1.TooltipMessageDirective
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
