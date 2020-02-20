
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



let s5 = Symbol.for('event1');
let s6 = Symbol.for('event2');
console.log(s5 === s6);



let s7 = Symbol.for('event7');
let description = Symbol.keyFor(s7);
console.log(description);



let article = {
	title: 'Whiteface Mt',
	[Symbol.for('article8')]: 'My Article'
};
let value = article[Symbol.for('article8')];
console.log(value);



let article2 = {
	title: 'Whiteface Mt2',
	[Symbol.for('article9')]: 'My Article2'
};
console.log(Object.getOwnPropertyNames(article2));



let article3 = {
	title: 'Whiteface Mt3',
	[Symbol.for('article10')]: 'My Article3'
};
console.log(Object.getOwnPropertySymbols(article3));















