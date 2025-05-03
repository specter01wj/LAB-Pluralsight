"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let a1 = (0, rxjs_1.of)(2, 4, 6, 8);
let b1 = (0, rxjs_1.from)([3, 5, 7, 9]);
a1.subscribe(val => {
    console.log('Value from of:', val);
});
b1.subscribe(val => {
    console.log('Value from from:', val);
});
