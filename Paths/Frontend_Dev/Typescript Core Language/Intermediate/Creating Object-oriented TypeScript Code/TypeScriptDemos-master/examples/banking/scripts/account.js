var Account = /** @class */ (function () {
    function Account(title) {
        this._balance = 0;
        this._title = title;
    }
    Account.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    Account.prototype.widthdrawal = function (amount) {
        if (this._balance > amount) {
            this._balance -= amount;
            return amount;
        }
        else
            return 0;
    };
    Object.defineProperty(Account.prototype, "accountInfo", {
        get: function () {
            return {
                routingNumber: Constants.ROUTING_NUMBER,
                bankNumber: Constants.BANK_NUMBER
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (val) {
            this._title = val;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
//# sourceMappingURL=account.js.map