"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var a1 = rxjs_1.of(2, 4, 6, 8);
var b1 = rxjs_1.from([3, 5, 7, 9]);
a1.subscribe(function (val) {
    console.log('Value from of:', val);
});
b1.subscribe(function (val) {
    console.log('Value from from:', val);
});
