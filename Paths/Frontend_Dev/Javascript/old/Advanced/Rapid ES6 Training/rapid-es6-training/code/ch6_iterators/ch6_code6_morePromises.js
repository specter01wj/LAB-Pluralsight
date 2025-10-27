
'use strict';


/*function doAsync1() {
	let p = new Promise(function(resolve, reject) {
		console.log('in promise code');
		setTimeout(function() {
			resolve(getAnotherPromise());
		}, 2000);
	});
	return p;
}

doAsync1().then(function() {
	console.log('OK');
}, function() {
	console.log('Nope');
});*/



function doAsync2() {
	return Promise.resolve('Some String');
}

doAsync2().then(function(value) {
	console.log('OK: ' + value);
}, function(reason) {
	console.log('Nope: ' + reason);
});



function doAsync3() {
	return Promise.reject('Some Error');
}

doAsync3().then(function(value) {
	console.log('OK: ' + value);
}, function(reason) {
	console.log('Nope: ' + reason);
});



/*let p1 = new Promise(...);
let p2 = new Promise(...);

Promise.all([p1, p2]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);*/



/*let p3 = new Promise(...);
let p4 = new Promise(...);

Promise.all([p3, p4]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);*/



/*let p5 = new Promise(...);
let p6 = new Promise(...);

Promise.all([p5, p6]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);*/



/*let p7 = new Promise(...);
let p8 = new Promise(...);

Promise.race([p7, p8]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);*/



/*let p9 = new Promise(...);
let p10 = new Promise(...);

Promise.race([p9, p10]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);*/



/*let p11 = new Promise(...);
let p12 = new Promise(...);

Promise.race([p11, p12]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);*/














