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
var forms_1 = require("@angular/forms");
var EditContactComponent = /** @class */ (function () {
    function EditContactComponent(route, contactsService, router) {
        this.route = route;
        this.contactsService = contactsService;
        this.router = router;
        this.contactForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(),
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            dateOfBirth: new forms_1.FormControl(),
            favoritesRanking: new forms_1.FormControl(),
            phone: new forms_1.FormGroup({
                phoneNumber: new forms_1.FormControl(),
                phoneType: new forms_1.FormControl()
            }),
            address: new forms_1.FormGroup({
                streetAddress: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                state: new forms_1.FormControl(),
                postalCode: new forms_1.FormControl(),
                addressType: new forms_1.FormControl()
            })
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
            _this.contactForm.controls.id.setValue(contact.id);
            _this.contactForm.controls.firstName.setValue(contact.firstName);
            _this.contactForm.controls.lastName.setValue(contact.lastName);
            _this.contactForm.controls.dateOfBirth.setValue(contact.dateOfBirth);
            _this.contactForm.controls.favoritesRanking.setValue(contact.favoritesRanking);
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
