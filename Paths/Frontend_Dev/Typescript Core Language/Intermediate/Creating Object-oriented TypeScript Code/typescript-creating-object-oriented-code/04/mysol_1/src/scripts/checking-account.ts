import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";

/*export class CheckingAccount extends BankAccount {
    accountType = AccountType.Checking;  

    getAccountInfo() {
        return {

        };
    }
}*/


export class CheckingAccount extends BankAccount {
	
	constructor(accountSettings: any) {
		super(accountSettings);
	}
}


