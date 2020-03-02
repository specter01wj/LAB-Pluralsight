
'use strict';

let employee1 = {name: 'James'};
let employee2 = {name: 'Kim'};

let employees = new Map();
employees.set(employee1, 'ABC');
employees.set(employee2, '123');

console.log(employees);
console.log(employees.get(employee1));



console.log(employees.size);



employees.delete(employee2);
console.log(employees.size);


employees.clear();
console.log(employees.size);



let employee3 = {name: 'Jin'};
let employee4 = {name: 'Mike'};
let arr1 = [
	[employee3, 'DEF'],
	[employee4, '456']
];
let employees_2 = new Map(arr1);
console.log(employees_2);
console.log(employees_2.size);



console.log(employees_2.has(employee4));








