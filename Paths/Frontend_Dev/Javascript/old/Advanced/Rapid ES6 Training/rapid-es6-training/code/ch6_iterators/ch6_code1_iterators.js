
'use strict';

let ids1 = [9000, 9001, 9002];
console.log(typeof ids1[Symbol.iterator]);



let ids2 = [9000, 9001, 9002];
let it2 = ids2[Symbol.iterator]();
console.log(it2.next());



let ids3 = [9000, 9001, 9002];
let iter3 = ids3[Symbol.iterator]();
iter3.next();
iter3.next();
console.log(iter3.next());



let ids4 = [9000, 9001, 9002];
let iter4 = ids4[Symbol.iterator]();
iter4.next();
iter4.next();
iter4.next();
console.log(iter4.next());



let idMaker1 = {
	[Symbol.iterator]() {
		let nextId = 8000;
		return {
			next() {
				return {
					value: nextId++,
					done: false
				};
			}
		};
	}
};
let it3 = idMaker1[Symbol.iterator]();
console.log(it3.next().value);
console.log(it3.next().value);



let idMaker2 = {
	[Symbol.iterator]() {
		let nextId = 8000;
		return {
			next() {
				return {
					value: nextId++,
					done: false
				};
			}
		};
	}
};
for(let v1 of idMaker2) {
	if(v1 > 8005) break;
	console.log(v1);
}



let idMaker3 = {
	[Symbol.iterator]() {
		let nextId = 8000;
		return {
			next() {
				let value = nextId > 8002 ? undefined : nextId++;
				let done = !value;
				return {
					value,
					done
				};
			}
		};
	}
};
for(let v2 of idMaker3) {
	console.log(v2);
}



let ids5 = [9000, 9001, 9002];
function process(id1, id2, id3) {
	console.log(id3);
}
process(...ids5);














