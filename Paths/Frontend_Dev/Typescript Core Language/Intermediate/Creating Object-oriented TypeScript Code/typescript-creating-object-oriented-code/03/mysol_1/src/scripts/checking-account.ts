﻿/*export class CheckingAccount {
    private _balance = 0; // field

    constructor(public title: string) { }

    get balance() { // get block
        return this._balance;
    }

    set balance(val: number) { // set block
        this._balance = val;
    }

    deposit(amount: number) { // function
        this.balance += amount;
    }

    withdrawal(amount: number) { // function
        this.balance -= amount;  
    }
}*/


export class CheckingAccount {
    private _balance: number = 0;


    constructor(public title: string) {
        // code...
    }


    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        this._balance = val;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }


}




