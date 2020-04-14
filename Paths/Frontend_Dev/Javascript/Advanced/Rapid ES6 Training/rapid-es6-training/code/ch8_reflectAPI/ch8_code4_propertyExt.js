
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
}

let r3 = new Restaurant_3();
Reflect.set(r3, 'id', 99);
console.log(r3.id);



class Restaurant_4 {
	constructor() {
		this._id = 9000;
	}
	set id(value) {
		this._id = value;
	}
}

let r4 = new Restaurant_4();
let alt4 = { id: 77 };
Reflect.set(r4, '_id', 66, alt4);
console.log(r4._id);
console.log(alt4._id);


class Location_5 {
	constructor() {
		this.city = 'Shanghai';
	}
}
class Restaurant_5 extends Location_5 {
	constructor() {
		super();
		this.id = 9000;
	}
}

let r5 = new Restaurant_5();
console.log(Reflect.has(r5, 'id'));
console.log(Reflect.has(r5, 'city'));



class Location_6 {
	constructor() {
		this.city = 'DC';
	}
}
class Restaurant_6 extends Location_6 {
	constructor() {
		super();
		this.id = 8000;
	}
}

let r6 = new Restaurant_6();
console.log(Reflect.ownKeys(r6));



class Restaurant_7 {

}

let r7 = new Restaurant_7();

Reflect.defineProperty(r7, 'id', {
	value: 2000,
	configurable: true,
	enumerable: true
});

console.log(r7['id']);



let rest8 = {
	id: 3333
};

console.log(rest8.id);
Reflect.deleteProperty(rest8, 'id');
console.log(rest8.id);



let rest9 = {
	id: 4444
};

let d9 = Reflect.getOwnPropertyDescriptor(rest9, 'id');
console.log(d9);







