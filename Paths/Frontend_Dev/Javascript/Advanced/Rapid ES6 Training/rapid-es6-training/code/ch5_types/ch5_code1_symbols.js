
'use strict';

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);



let eventSymbol2 = Symbol('resize event');
console.log(eventSymbol2.toString());



const CAL_E_SYMBOL = Symbol('calculate event');
console.log(CAL_E_SYMBOL.toString());



let s = Symbol.for('event');
console.log(s.toString());












