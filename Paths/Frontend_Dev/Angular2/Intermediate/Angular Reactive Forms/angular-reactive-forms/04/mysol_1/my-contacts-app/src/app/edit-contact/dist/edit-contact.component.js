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
var contact_model_1 = require("../contacts/contact.model");
var EditContactComponent = /** @class */ (function () {
    function EditContactComponent(route, contactsService, router, fb) {
        this.route = route;
        this.contactsService = contactsService;
        this.router = router;
        this.fb = fb;
        this.phoneTypes = contact_model_1.phoneTypeValues;
        this.addressTypes = contact_model_1.addressTypeValues;
        this.contactForm = this.fb.nonNullable.group({
            id: '',
            personal: false,
            firstName: '',
            lastName: '',
            dateOfBirth: null,
            favoritesRanking: null,
            phone: this.fb.nonNullable.group({
                phoneNumber: '',
                phoneType: ''
            }),
            address: this.fb.nonNullable.group({
                streetAddress: '',
                city: '',
                state: '',
                postalCode: '',
                addressType: ''
            }),
            notes: ''
        });
    }
    EditContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactId = this.route.snapshot.params['id'];
        if (!contactId)
            return;
        this.contactsService.getContact(contactId).subscribe(function (contact) {
            if (!contact)
                return;
            _this.contactForm.setValue(contact);
        });
    };
    EditContactComponent.prototype.saveContact = function () {
        var _this = this;
        this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe({
            next: function () { return _this.router.navigate(['/contacts']); }
        });
    };
    EditContactComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-contact',
            standalone: false,
            templateUrl: './edit-contact.component.html',
            styleUrl: './edit-contact.component.scss'
        })
    ], EditContactComponent);
    return EditContactComponent;
}());
exports.EditContactComponent = EditContactComponent;
