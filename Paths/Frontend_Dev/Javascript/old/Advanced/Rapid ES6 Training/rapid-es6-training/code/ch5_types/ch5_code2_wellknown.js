
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



let values = [8, 12, 16];
console.log([].concat(values));



let values2 = [8, 12, 16];
values2[Symbol.isConcatSpreadable] = false;
console.log([].concat(values2));



let values3 = [8, 12, 16];
let sum = values3 + 100;
console.log(sum);



let values4 = [8, 12, 16];
values4[Symbol.toPrimitive] = function(hint) {
	console.log(hint);
	return 42;
}
let sum2 = values4 + 100;
console.log(sum2);







