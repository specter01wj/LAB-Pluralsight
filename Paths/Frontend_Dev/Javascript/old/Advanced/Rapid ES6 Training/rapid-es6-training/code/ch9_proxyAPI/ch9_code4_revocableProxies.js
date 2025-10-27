
'use strict';


var t = {
	tableId: 99
}

let { proxy, revoke } = Proxy.revocable(t, {
	get: function(target, prop, receiver) {
		return Reflect.get(target, prop, receiver) + 100;
	}
});

console.log(proxy.tableId);
revoke();
console.log(proxy.tableId);










