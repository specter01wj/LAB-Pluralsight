
'use strict';


let rest1 = {
	id: 2000
};

rest1.location = 'Utah';
console.log(rest1.location);



let rest2 = {
	id: 3000
};

Reflect.preventExtensions(rest2);
rest1.location = 'Texas';
console.log(rest2.location);




















