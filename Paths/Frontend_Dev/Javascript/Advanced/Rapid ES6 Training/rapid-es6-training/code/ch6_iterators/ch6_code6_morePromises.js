
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



let p1 = new Promise(...);
let p2 = new Promise(...);

Promise.all([p1, p2]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);



let p3 = new Promise(...);
let p4 = new Promise(...);

Promise.all([p1, p2]).then(
	function(value) { console.log('OK: ' + value); }, 
	function(reason) { console.log('Nope: ' + reason); }
);















