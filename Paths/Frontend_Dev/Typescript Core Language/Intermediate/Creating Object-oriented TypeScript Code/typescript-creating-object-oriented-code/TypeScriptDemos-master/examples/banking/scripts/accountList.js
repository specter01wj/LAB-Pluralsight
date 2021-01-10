var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());
var acctsHtml = '';
var accountsDiv = $('#accounts');
var checkingAcct = new CheckingAccount('Jane Doe Checking');
var savingsAcct = new SavingsAccount('Jane Doe Savings', 2);
var accList = new AccountList();
accList.add(checkingAcct);
accList.add(savingsAcct);
accList.getAccounts().forEach(function (acct, index) {
    acctsHtml += acct.title + '<br />';
});
accountsDiv.html(acctsHtml);
//# sourceMappingURL=accountList.js.map