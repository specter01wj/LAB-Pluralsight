
'use strict';

let perks1 = new Set();
perks1.add('Car');
perks1.add('Long Vacation');

console.log(perks1);
console.log(perks1.size);



perks1.add('Car');
console.log(perks1);
console.log(perks1.size);



let perks2 = new Set(['Car', 'Tank', 'Plane']);
console.log(perks2.size);



let newPerks1 = new Set(perks2);
console.log(newPerks1);
console.log(newPerks1.size);



console.log(perks2.has('Tank'));
console.log(perks2.has('Airpod'));



console.log(...perks2.keys());
console.log(...perks2.values());
console.log(...perks2.entries());



let perks3 = new Set([
	{id: 800},
	{id: 800}
]);
console.log(perks3);
console.log(perks3.size);



let perks4 = new Set([
	200,
	'200'
]);
console.log(perks4);
console.log(perks4.size);


// WeakSet


/*let perks5 = new WeakSet([1, 2, 3]);
console.log(perks5);
console.log(perks5.size);*/



let p1 = { name: 'Car' };
let p2 = { name: 'Jet' };
let perks6 = new WeakSet([p1, p2]);
console.log(perks6);
console.log(perks6.size);



console.log(perks6.has(p1));



p1 = null;
console.log(perks6.has(p1));



