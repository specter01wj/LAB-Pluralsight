
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
















