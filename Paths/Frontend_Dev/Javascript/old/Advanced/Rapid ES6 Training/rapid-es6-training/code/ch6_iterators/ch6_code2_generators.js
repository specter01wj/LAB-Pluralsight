
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



function *process3() {
	yield 8000;
	yield 8001;
}
let it3 = process3();
it3.next();
it3.next();
console.log(it3.next());



function *process4() {
	let nextId = 7000;
	while(true) {
		yield(nextId++);
	}
}
let it4 = process4();
it4.next();
console.log(it4.next().value);



function *process5() {
	let nextId = 7000;
	while(true) {
		yield(nextId++);
	}
}

for(let id1 of process5()) {
	if(id1 > 7002) break;
	console.log(id1);
}

















