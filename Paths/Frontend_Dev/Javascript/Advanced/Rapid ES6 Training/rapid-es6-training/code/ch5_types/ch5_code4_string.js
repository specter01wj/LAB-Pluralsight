
'use strict';

let a = {
	x: 1
};

let b = {
	y: 2
};

Object.setPrototypeOf(a, b);
console.log(a.y);



let a2 = {
	a_2: 1
};

let b2 = {
	b_2: 2
};
let target = {};
Object.assign(target, a2, b2);
console.log(target);



let a3 = {
	a_3: 1
};

let b3 = {
	a_3: 5,
	b_3: 2
};
let target2 = {};
Object.assign(target2, a3, b3);
console.log(target2);



let a4 = {
	a_4: 1
};

let b4 = {
	a_4: 5,
	b_4: 2
};
Object.defineProperty(b4, 'c4', {
	value: 10,
	enumerable: true
});
let target3 = {};
Object.assign(target3, a4, b4);
console.log(target3);



let a5 = {
	a_5: 1
};

let b5 = {
	a_5: 5,
	b_5: 2
};

let c5 = {
	c_5: 20
};
Object.setPrototypeOf(b5, c5);
let target4 = {};
Object.assign(target4, a5, b5);
console.log(target4);



let amount = NaN;
console.log(amount === amount);



let amount2 = NaN;
console.log(Object.is(amount, amount));



let amount3 = 0, total3 = -0;
console.log(amount3 === total3);



let amount4 = 0, total4 = -0;
console.log(Object.is(amount4, total4));



let article = {
	title: 'White Mt',
	[Symbol.for('article')]: 'My Article'
};

console.log(Object.getOwnPropertySymbols(article));









