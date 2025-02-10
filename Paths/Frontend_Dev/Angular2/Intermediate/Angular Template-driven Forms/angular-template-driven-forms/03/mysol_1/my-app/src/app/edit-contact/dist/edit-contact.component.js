"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditContactComponent = void 0;
var core_1 = require("@angular/core");
var EditContactComponent = /** @class */ (function () {
    function EditContactComponent(route, contactsService, router) {
        this.route = route;
        this.contactsService = contactsService;
        this.router = router;
        this.contact = {
            id: '',
            firstName: '',
            lastName: '',
            dateOfBirth: null,
            favoritesRanking: 0,
            phone: {
                phoneNumber: '',
                phoneType: ''
            },
            address: {
                streetAddress: '',
                city: '',
                state: '',
                postalCode: '',
                addressType: ''
            }
        };
    }
    EditContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactId = this.route.snapshot.params['id'];
        if (!contactId)
            return;
        this.contactsService.getContact(contactId).subscribe(function (contact) {
            if (contact) {
                _this.contact = contact;
            }
        });
    };
    EditContactComponent.prototype.saveContact = function (form) {
        var _this = this;
        console.log(form.value);
        this.contactsService.saveContact(form.value).subscribe({
            next: function () { return _this.router.navigate(['/contacts']); }
        });
    };
    EditContactComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-contact',
            templateUrl: './edit-contact.component.html',
            styleUrls: ['./edit-contact.component.css']
        })
    ], EditContactComponent);
    return EditContactComponent;
}());
exports.EditContactComponent = EditContactComponent;
