"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankingAccount = void 0;
var BankingAccount = /** @class */ (function () {
    function BankingAccount(title) {
        this._balance = 0;
        this._title = title;
    }
    BankingAccount.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    BankingAccount.prototype.widthdrawal = function (amount) {
        if (this._balance > amount) {
            this._balance -= amount;
            return amount;
        }
        else
            return 0;
    };
    Object.defineProperty(BankingAccount.prototype, "accountInfo", {
        get: function () {
            return {
                routingNumber: Constants.ROUTING_NUMBER,
                bankNumber: Constants.BANK_NUMBER
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankingAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankingAccount.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (val) {
            this._title = val;
        },
        enumerable: false,
        configurable: true
    });
    return BankingAccount;
}());
exports.BankingAccount = BankingAccount;
//# sourceMappingURL=bankingAccount.js.map