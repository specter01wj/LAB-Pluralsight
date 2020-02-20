
'use strict';

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);



let eventSymbol2 = Symbol('resize event');
console.log(eventSymbol2.toString());



const CAL_E_SYMBOL = Symbol('calculate event');
console.log(CAL_E_SYMBOL.toString());



let s = Symbol.for('event');
console.log(s.toString());



let s1 = Symbol('event');
let s2 = Symbol('event');
console.log(s1 === s2);



let s3 = Symbol.for('event');
let s4 = Symbol.for('event');
console.log(s3 === s4);












