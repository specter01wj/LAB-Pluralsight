"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InMemoryContactsApi = void 0;
var core_1 = require("@angular/core");
var InMemoryContactsApi = /** @class */ (function () {
    function InMemoryContactsApi() {
    }
    InMemoryContactsApi.prototype.createDb = function () {
        var contacts = [
            {
                id: '5CehW',
                firstName: 'Percival',
                lastName: 'Doodleplumb',
                dateOfBirth: new Date('1994/05/05'),
                favoritesRanking: 0,
                phone: { phoneNumber: '555-765-4321', phoneType: 'mobile' },
                address: {
                    streetAddress: '777 Whimsy Lane',
                    city: 'Gleeberg City',
                    state: 'Colohoma',
                    postalCode: 'A4321',
                    addressType: 'home'
                }
            },
            {
                id: 'A6rwe',
                firstName: 'Mortimer',
                lastName: 'Flungford',
                dateOfBirth: new Date('1988/10/05'),
                favoritesRanking: 0,
                phone: { phoneNumber: '555-877-5678', phoneType: 'mobile' },
                address: {
                    streetAddress: '543 Lullaby Lane',
                    city: 'Sleepytown',
                    state: 'Ulaska',
                    postalCode: 'F2231',
                    addressType: 'other'
                }
            },
            {
                id: '3bNGA',
                firstName: 'Wanda',
                lastName: 'Giggleworth',
                dateOfBirth: new Date('1986/11/08'),
                favoritesRanking: 1,
                phone: { phoneNumber: '555-123-4567', phoneType: 'mobile' },
                address: {
                    streetAddress: '123 Merriment Avenue',
                    city: 'Dorado City',
                    state: 'Mezona',
                    postalCode: 'Z2345',
                    addressType: 'work'
                }
            },
        ];
        return { contacts: contacts };
    };
    InMemoryContactsApi = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InMemoryContactsApi);
    return InMemoryContactsApi;
}());
exports.InMemoryContactsApi = InMemoryContactsApi;
