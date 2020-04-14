
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









