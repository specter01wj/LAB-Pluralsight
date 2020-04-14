
'use strict';


class Restaurant_1 {
	constructor() {
		this.id = 8000;
	}
}

let r1 = new Restaurant_1();

console.log(Reflect.get(r1, 'id'));



class Restaurant_2 {
	constructor() {
		this._id = 9000;
	}
	get id() {
		return this._id;
	}
}

let r2 = new Restaurant_2();

console.log(Reflect.get(r2, 'id', {_id: 88}));



class Restaurant_3 {
	constructor() {
		this.id = 9000;
	}
	get id() {
		return this._id;
	}
}

let r3 = new Restaurant_3();
Reflect.set(r3, 'id', 88);
console.log(r3.id);

















