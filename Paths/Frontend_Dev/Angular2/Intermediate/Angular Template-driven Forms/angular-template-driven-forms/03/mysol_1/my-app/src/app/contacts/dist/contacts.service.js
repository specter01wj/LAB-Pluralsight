"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactsService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var nanoid_1 = require("nanoid");
var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
    }
    ContactsService.prototype.getContact = function (id) {
        return this.http.get("api/contacts/" + id)
            .pipe(rxjs_1.map(function (c) {
            var dob = c.dateOfBirth ? new Date(c.dateOfBirth) : null;
            return __assign(__assign({}, c), { dateOfBirth: dob });
        }));
    };
    ContactsService.prototype.getAllContacts = function () {
        return this.http.get('api/contacts');
    };
    ContactsService.prototype.saveContact = function (contact) {
        var headers = { headers: { 'Content-Type': 'application/json' } };
        if (!contact.id || contact.id === '') {
            var newContact = __assign(__assign({}, contact), { id: nanoid_1.nanoid(5) });
            return this.http.post('api/contacts/', newContact, headers);
        }
        else
            return this.http.put('api/contacts/', contact, headers).pipe(rxjs_1.delay(500));
    };
    ContactsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
