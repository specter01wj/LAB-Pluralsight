"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var a1 = rxjs_1.fromEvent(document, 'click');
a1.subscribe(function (val) {
    console.log('Click Event:', val.target);
});
