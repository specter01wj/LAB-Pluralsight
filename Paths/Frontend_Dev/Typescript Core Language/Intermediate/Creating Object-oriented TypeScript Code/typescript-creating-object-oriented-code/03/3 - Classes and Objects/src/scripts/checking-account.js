"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccount = void 0;
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(title) {
        this.title = title;
        this._balance = 0; // field
    }
    Object.defineProperty(CheckingAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: false,
        configurable: true
    });
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    CheckingAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=checking-account.js.map