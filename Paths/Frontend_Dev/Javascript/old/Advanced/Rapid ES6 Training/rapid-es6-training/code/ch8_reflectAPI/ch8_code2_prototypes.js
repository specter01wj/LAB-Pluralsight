
'use strict';


class Location_1 {
	constructor() {
		console.log('constructing Location');
	}
}

class Restaurant_1 extends Location {

}

console.log(Reflect.getPrototypeOf(Restaurant_1));



class Restaurant_2 {

}

let setup = {
	getId() {
		return 88;
	}
}

let r1 = new Restaurant_2();
Reflect.setPrototypeOf(r1, setup);
console.log(r1.getId());












