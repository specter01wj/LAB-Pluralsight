"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactListComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactsService) {
        this.contactsService = contactsService;
        this.contacts = [];
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsService.getAllContacts().subscribe(function (contacts) {
            return _this.contacts = contacts;
        });
    };
    Object.defineProperty(ContactListComponent.prototype, "favoriteContacts", {
        get: function () {
            return this.contacts
                .filter(function (c) { return c.favoritesRanking && c.favoritesRanking > 0; })
                .sort(this.sortByFavoriteRanking);
        },
        enumerable: false,
        configurable: true
    });
    ContactListComponent.prototype.sortByFavoriteRanking = function (a, b) {
        if (!a.favoritesRanking)
            return -1;
        if (!b.favoritesRanking)
            return 1;
        if (a.favoritesRanking < b.favoritesRanking)
            return -1;
        else if (a.favoritesRanking > b.favoritesRanking)
            return 1;
        return 0;
    };
    ContactListComponent = __decorate([
        core_1.Component({
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterModule],
            templateUrl: './contact-list.component.html',
            styleUrls: ['./contact-list.component.css']
        })
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
