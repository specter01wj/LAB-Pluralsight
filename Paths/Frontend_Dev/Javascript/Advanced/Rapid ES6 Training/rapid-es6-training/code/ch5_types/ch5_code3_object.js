
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
Object.assign(target2, a2, b2);
console.log(target2);















