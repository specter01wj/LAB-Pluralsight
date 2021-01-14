"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bankingAccount_1 = require("./bankingAccount");
var ba = new bankingAccount_1.BankingAccount('Checking');
ba.deposit(100);
document.getElementById('balance').innerHTML = ba.balance.toString();
//# sourceMappingURL=main.js.map