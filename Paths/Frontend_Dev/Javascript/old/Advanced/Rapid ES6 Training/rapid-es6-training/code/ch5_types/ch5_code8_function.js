
'use strict';


let fn1 = function calc() {
	return 0;
};
console.log(fn1.name);



let fn2 = function() {
	return 0;
};
console.log(fn2.name);



let fn3 = function() {
	return 0;
};
let newFn3 = fn3;
console.log(newFn3.name);



class Calculator {
	constructor() {}

	add() {}
}
let c1 = new Calculator();
console.log(Calculator.name);
console.log(c1.add.name);




