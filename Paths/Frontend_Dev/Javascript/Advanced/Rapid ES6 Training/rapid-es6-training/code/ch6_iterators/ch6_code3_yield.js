
'use strict';


function *process1() {
	yield 8000;
	yield 8001;
}
let it1 = process1();
console.log(it1.next());
















