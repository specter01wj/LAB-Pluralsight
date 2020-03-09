"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var num$ = rxjs_1.from([-2, -1, 0, 1, 2]);
var observer = {
    next: function (value) { return console.log(value); },
    error: function (err) { return console.log("ERROR: " + err); },
    complete: function () { return console.log('All done.'); }
};
num$.subscribe(observer);
