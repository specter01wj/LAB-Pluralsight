
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














