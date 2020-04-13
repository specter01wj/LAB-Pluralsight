
'use strict';


console.log(typeof Reflect);



/*class Restaurant_1 {

}

let r1 = Reflect.construct(Restaurant_1);
console.log(r1 instanceof Restaurant_1);*/



class Restaurant_2 {
	constructor(name, city) {
		console.log(`${name} in ${city}`);
	}
}

let r2 = Reflect.construct(Restaurant_2, ["Jim", "New York"]);



class Restaurant_3 {
	constructor() {
		console.log(`new target: ${new.target}`);
	}
}
function restaurantMaker_1() {
	console.log('in restaurantMaker');
}

let r3 = Reflect.construct(Restaurant_3, ["James", "Baltimore"], restaurantMaker_1);



class Restaurant_4 {
	constructor() {
		console.log(`new target: ${new.target}`);
	}
}
function restaurantMaker_1() {
	console.log('in restaurantMaker');
}

let r3 = Reflect.construct(Restaurant_3, ["James", "Baltimore"], restaurantMaker_1);














