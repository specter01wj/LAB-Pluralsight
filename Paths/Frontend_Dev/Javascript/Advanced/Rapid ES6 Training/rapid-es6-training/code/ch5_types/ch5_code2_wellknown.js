
'use strict';

let Blog = function() {

};
let blog = new Blog();
console.log(blog.toString());



let Blog2 = function() {

};
Blog2.prototype[Symbol.toStringTag] = 'Blog Class';
let blog2 = new Blog2();
console.log(blog2.toString());


















