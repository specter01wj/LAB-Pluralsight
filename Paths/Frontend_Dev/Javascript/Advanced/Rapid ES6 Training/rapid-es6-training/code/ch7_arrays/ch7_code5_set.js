
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










