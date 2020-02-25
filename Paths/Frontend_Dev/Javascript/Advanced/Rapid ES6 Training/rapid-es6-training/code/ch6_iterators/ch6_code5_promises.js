
'use strict';


function *process1() {
	try {
		yield 9000;
		yield 9001;
		yield 9002;
	}
	catch(e) {

	}
}
let it1 = process1();
console.log(it1.next().value);
console.log(it1.throw('foo'));
console.log(it1.next());



/*function *process2() {
	yield 9000;
	yield 9001;
	yield 9002;
}
let it2 = process2();
console.log(it2.next().value);
console.log(it2.throw('foo'));
console.log(it2.next());*/



function *process3() {
	yield 9000;
	yield 9001;
	yield 9002;
}
let it3 = process3();
console.log(it3.next().value);
console.log(it3.return('foo'));
console.log(it3.next());














