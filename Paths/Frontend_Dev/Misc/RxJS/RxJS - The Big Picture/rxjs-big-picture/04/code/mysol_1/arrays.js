"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var bookArray = [
    { "bookID": 1, "title": "Goodnight Moon" },
    { "bookID": 2, "title": "Winnie-the-Pooh" },
    { "bookID": 3, "title": "Where the Wild Things Are" },
];
var booksObservable$ = rxjs_1.from(bookArray);
var allBooks = [];
booksObservable$.subscribe(function (data) { return allBooks = data; }, function (err) { return console.log(err); }, function () { return console.log('All done getting books.'); });
var element1 = document.getElementById('t1');
element1.innerHTML = allBooks[0];
