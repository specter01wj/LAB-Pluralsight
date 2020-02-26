
'use strict';

let salaries1 = Array(9000);
console.log(salaries1.length);



let salaries2 = Array.of(9000);
console.log(salaries2.length);



let amounts1 = [800, 810, 820];
let salaries3 = Array.from(amounts1, v => v + 100);
console.log(salaries3);



let amounts2= [800, 810, 820];
let salaries4 = Array.from(amounts2, function(v) {
	return v + this.adjustment;
}, { adjustment: 50 });
console.log(salaries4);



/*let amounts3= [800, 810, 820];
let salaries5 = Array.from(amounts3, v => {
	return v + this.adjustment;
}, { adjustment: 50 });
console.log(salaries5);*/



















