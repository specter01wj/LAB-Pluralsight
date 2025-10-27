
'use strict';


var t = {
	tableId: 99
}

var p1 = new Proxy({}, {
	get: function(target, prop, receiver) {
		return 'Property ' + prop + ' doesn\'t exist...';
	}
});

Object.setPrototypeOf(t, p1);

console.log(t.tableId);
console.log(t.size);










