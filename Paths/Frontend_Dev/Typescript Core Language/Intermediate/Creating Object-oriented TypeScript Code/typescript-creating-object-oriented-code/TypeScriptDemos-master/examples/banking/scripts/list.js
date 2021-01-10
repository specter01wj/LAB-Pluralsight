var ListOfNumbers = /** @class */ (function () {
    function ListOfNumbers() {
        this._items = [];
    }
    ListOfNumbers.prototype.add = function (item) {
        this._items.push(item);
    };
    ListOfNumbers.prototype.getItems = function () {
        return this._items;
    };
    return ListOfNumbers;
}());
var ListOfString = /** @class */ (function () {
    function ListOfString() {
        this._items = [];
    }
    ListOfString.prototype.add = function (item) {
        this._items.push(item);
    };
    ListOfString.prototype.getItems = function () {
        return this._items;
    };
    return ListOfString;
}());
//Generic list
//With constraint
//class List<T extends IAccount> {
var List = /** @class */ (function () {
    function List() {
        this._items = [];
    }
    List.prototype.add = function (item) {
        this._items.push(item);
    };
    List.prototype.getItems = function () {
        return this._items;
    };
    return List;
}());
//Constrain <T> to a type that implements IAccount
var ListWithConstraint = /** @class */ (function () {
    function ListWithConstraint() {
        this._items = [];
    }
    ListWithConstraint.prototype.add = function (item) {
        this._items.push(item);
    };
    ListWithConstraint.prototype.getItems = function () {
        return this._items;
    };
    return ListWithConstraint;
}());
var acctsHtml = '';
var accountsDiv = $('#accounts');
var checkingAcct = new CheckingAccount('Jane Doe Checking');
var savingsAcct = new SavingsAccount('Jane Doe Savings', 2);
var accountList = new List();
accountList.add(checkingAcct);
accountList.add(savingsAcct);
accountList.getItems().forEach(function (acct, index) {
    acctsHtml += acct.title + '<br />';
});
accountsDiv.html(acctsHtml);
//# sourceMappingURL=list.js.map