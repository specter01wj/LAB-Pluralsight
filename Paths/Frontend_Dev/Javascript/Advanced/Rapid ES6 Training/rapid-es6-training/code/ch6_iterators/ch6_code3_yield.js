
'use strict';


function *process1() {
	yield 8000;
}
let it1 = process1();
console.log(it1.next());



function *process2() {
	yield;
}
let it2 = process2();
console.log(it2.next());



function *process3() {
	let result = yield;
	console.log(`result is ${result}`);
}
let it3 = process3();
it3.next();
it3.next(200);



function *process4() {
	let result = yield;
	console.log(`result is ${result}`);
}
let it4 = process4();
it4.next();
console.log(it4.next(200));



function *process5() {
	let newArray = [yield, yield, yield];
	console.log(newArray[2]);
}
let it5 = process5();
it5.next();
it5.next(2);
it5.next(4);
it5.next(42);



/*function *process6() {
	let value = 4 * yield 42;
	console.log(value);
}
let it6 = process6();
it6.next();
it6.next(10);*/

















