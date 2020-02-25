
'use strict';


function *process1() {
	yield 8000;
	yield 8001;
}
let it1 = process1();
console.log(it1.next());



function *process2() {
	yield 8000;
	yield 8001;
}
let it2 = process2();
it2.next();
console.log(it2.next());




















