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
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(title) {
        return _super.call(this, title) || this;
    }
    return CheckingAccount;
}(BankingAccount));
var account = new CheckingAccount('Jane Doe Checking');
account.deposit(1000);
account.widthdrawal(500);
var div = $('#checking');
div.html('$' + account.balance.toFixed(2));
//# sourceMappingURL=checkingAccount.js.map