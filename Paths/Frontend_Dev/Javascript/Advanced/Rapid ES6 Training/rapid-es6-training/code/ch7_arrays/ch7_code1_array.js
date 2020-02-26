
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

console.log("------------");

let salaries6 = [600, 700, 800];
salaries6.fill(900);
console.log(salaries6);



let salaries7 = [600, 700, 800];
salaries7.fill(900, 1);
console.log(salaries7);



let salaries8 = [600, 700, 800];
salaries8.fill(900, 1, 2);
console.log(salaries8);



let salaries9 = [600, 700, 800];
salaries9.fill(900, -1);
console.log(salaries9);

console.log("------------");

let salaries10 = [600, 700, 900, 800];
let result1 = salaries10.find(value => {
	return value >= 750;
});
console.log(result1);



let salaries11 = [600, 700, 800];
let result2 = salaries11.find(value => {
	return value >= 650;
});
console.log(result2);



let salaries12 = [600, 700, 800];
let result3 = salaries12.findIndex(function(value, index, array) {
	return value == this;
}, 700);
console.log(result3);


console.log("------------");


let salaries13 = [600, 700, 800];
salaries13.copyWithin(2, 0);
console.log(salaries13);



let ids1 = [1, 2, 3, 4, 5];
ids1.copyWithin(0, 1);
console.log(ids1);



let ids2 = [1, 2, 3, 4, 5];
ids2.copyWithin(3, 0, 2);
console.log(ids2);


console.log("------------");


let ids3 = ['A', 'B', 'C'];
console.log(...ids3.entries());



let ids4 = ['A', 'B', 'C'];
console.log(...ids4.keys());



let ids5 = ['A', 'B', 'C'];
console.log(...ids5.values());






