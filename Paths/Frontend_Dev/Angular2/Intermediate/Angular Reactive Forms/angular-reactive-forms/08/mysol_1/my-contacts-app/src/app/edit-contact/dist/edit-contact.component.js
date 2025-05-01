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
var contact_model_1 = require("../contacts/contact.model");
var restricted_words_validator_1 = require("../validators/restricted-words.validator");
var rxjs_1 = require("rxjs");
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
            icon: '',
            personal: false,
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: '',
            dateOfBirth: null,
            favoritesRanking: null,
            phones: this.fb.array([this.createPhoneGroup()]),
            address: this.fb.nonNullable.group({
                streetAddress: ['', forms_1.Validators.required],
                city: ['', forms_1.Validators.required],
                state: ['', forms_1.Validators.required],
                postalCode: ['', forms_1.Validators.required],
                addressType: ''
            }),
            notes: ['', restricted_words_validator_1.restrictedWords(['foo', 'bar'])]
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
            for (var i = 1; i < contact.phones.length; i++) {
                _this.addPhone();
            }
            _this.contactForm.setValue(contact);
            _this.subscribeToAddressChanges();
        });
    };
    EditContactComponent.prototype.subscribeToAddressChanges = function () {
        var addressGroup = this.contactForm.get('address');
        addressGroup.valueChanges
            .pipe(rxjs_1.distinctUntilChanged(this.stringifyCompare))
            .subscribe(function () {
            var _a, _b;
            for (var controlName in addressGroup.controls) {
                (_a = addressGroup.get(controlName)) === null || _a === void 0 ? void 0 : _a.removeValidators([forms_1.Validators.required]);
                (_b = addressGroup.get(controlName)) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            }
        });
        addressGroup.valueChanges
            .pipe(rxjs_1.debounceTime(2000), rxjs_1.distinctUntilChanged(this.stringifyCompare))
            .subscribe(function () {
            var _a, _b;
            for (var controlName in addressGroup.controls) {
                (_a = addressGroup.get(controlName)) === null || _a === void 0 ? void 0 : _a.addValidators([forms_1.Validators.required]);
                (_b = addressGroup.get(controlName)) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            }
        });
    };
    EditContactComponent.prototype.stringifyCompare = function (a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    };
    EditContactComponent.prototype.createPhoneGroup = function () {
        var phoneGroup = this.fb.nonNullable.group({
            phoneNumber: '',
            phoneType: '',
            preferred: false
        });
        phoneGroup.controls.preferred.valueChanges
            .pipe(rxjs_1.distinctUntilChanged(this.stringifyCompare))
            .subscribe(function (value) {
            if (value) {
                phoneGroup.controls.phoneNumber.addValidators([forms_1.Validators.required]);
            }
            else {
                phoneGroup.controls.phoneNumber.removeValidators([forms_1.Validators.required]);
            }
            phoneGroup.controls.phoneNumber.updateValueAndValidity();
        });
        return phoneGroup;
    };
    EditContactComponent.prototype.addPhone = function () {
        this.phones.push(this.createPhoneGroup());
    };
    Object.defineProperty(EditContactComponent.prototype, "firstName", {
        get: function () {
            return this.contactForm.controls['firstName'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditContactComponent.prototype, "notes", {
        get: function () {
            return this.contactForm.controls['notes'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditContactComponent.prototype, "phones", {
        get: function () {
            return this.contactForm.get('phones');
        },
        enumerable: false,
        configurable: true
    });
    EditContactComponent.prototype.getPhoneControl = function (index, controlName) {
        return this.phones.at(index).get(controlName);
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
