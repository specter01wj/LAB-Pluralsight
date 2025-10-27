
'use strict';


function Employee_1() {
	this.name = 'James Wang';
	this.salary = 0;
}

var e1 = new Employee_1();

var p1 = new Proxy(e1, {
	get: function(target, prop, receiver) {
		return 'Attempted access: ' + prop;
	}
});

console.log(p1.salary);



function Employee_2() {
	this.name = 'Mike Bolt';
	this.salary = 10;
}

var e2 = new Employee_2();

var p2 = new Proxy(e2, {
	get: function(target, prop, receiver) {
		return Reflect.get(target, prop, receiver);
	}
});

console.log(p2.salary);



function Employee_3() {
	this.name = 'Lisa King';
	this.salary = 20;
}

var e3 = new Employee_3();

var p3 = new Proxy(e3, {
	get: function(target, prop, receiver) {
		if(prop === 'salary') {
			return 'Denied';
		}
		return Reflect.get(target, prop, receiver);
	}
});

console.log(p3.salary);
console.log(p3.name);















