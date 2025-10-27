
'use strict';


console.log(Number.parseInt === parseInt);


console.log(Number.parseFloat === parseFloat);


let str1 = 'NaN';
console.log(isNaN(str1));
console.log(Number.isNaN(str1));


let str2 = '8000';
console.log(isFinite(str2));
console.log(Number.isFinite(str2));


let str3 = 408.2;
console.log(Number.isInteger(str3));


console.log('----------------');

console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger(3));


console.log('----------------');

let a1 = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(a1));
console.log(a1);
a1 = Math.pow(2, 53);
console.log(Number.isSafeInteger(a1));


console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);









