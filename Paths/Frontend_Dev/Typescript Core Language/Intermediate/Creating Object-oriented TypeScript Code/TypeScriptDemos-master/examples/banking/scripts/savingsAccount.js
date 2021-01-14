var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(title, interestRate) {
        var _this = _super.call(this, title) || this;
        _this._interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    };
    return SavingsAccount;
}(BankingAccount));
var savings = new SavingsAccount('Jane Doe', 2.5);
savings.deposit(1000);
savings.addInterest();
var savingsDiv = $('#savings');
savingsDiv.html('$' + savings.balance.toFixed(2) + ' (after interest added)');
//# sourceMappingURL=savingsAccount.js.map