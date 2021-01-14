"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./account/index");
// import { CheckingAccount } from './account/checkingAccount';
// import { SavingsAccount } from './account/savingsAccount';
// import { AccountList } from './account/accountList';
var Bootstrapper = /** @class */ (function () {
    function Bootstrapper() {
    }
    Bootstrapper.prototype.$ = function (selector) {
        return document.querySelector(selector);
    };
    Bootstrapper.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accountsDiv = this.$('#accounts');
        var checkingAcct = new index_1.CheckingAccount('Jane Doe Checking');
        var savingsAcct = new index_1.SavingsAccount('Jane Doe Savings', 2);
        var accList = new index_1.AccountList();
        accList.add(checkingAcct);
        accList.add(savingsAcct);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        accountsDiv.innerHTML = acctsHtml;
    };
    Bootstrapper.prototype.renderChecking = function () {
        var account = new index_1.CheckingAccount('Jane Doe Checking');
        account.deposit(1000);
        account.widthdrawal(500);
        var div = this.$('#checking').innerHTML = '$' + account.balance.toFixed(2);
    };
    Bootstrapper.prototype.renderSavings = function () {
        var savings = new index_1.SavingsAccount('Jane Doe', 2.5);
        savings.deposit(1000);
        savings.addInterest();
        var savingsDiv = this.$('#savings').innerHTML = '$' +
            savings.balance.toFixed(2) +
            ' (after interest added)';
    };
    return Bootstrapper;
}());
var bootstrapper = new Bootstrapper();
bootstrapper.renderAccounts();
bootstrapper.renderChecking();
bootstrapper.renderSavings();
//# sourceMappingURL=main.js.map