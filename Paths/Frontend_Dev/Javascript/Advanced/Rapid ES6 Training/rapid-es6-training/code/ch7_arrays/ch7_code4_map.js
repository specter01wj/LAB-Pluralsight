
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



let list1 = [...employees_2.values()];
console.log(employees_2.values());
console.log(list1);



let list2 = [...employees_2.entries()];
console.log(list2);
console.log(list1[0][1]);
console.log(list2[0][1]);


// WeakMap


let employee5 = {name: 'Kate'};
let employee6 = {name: 'Zion'};
let employees_3 = new WeakMap([
	[employee5, 'GHI'],
	[employee6, '789']
]);
employee5 = null;
console.log(employees_3);
console.log(employees_3.size);




