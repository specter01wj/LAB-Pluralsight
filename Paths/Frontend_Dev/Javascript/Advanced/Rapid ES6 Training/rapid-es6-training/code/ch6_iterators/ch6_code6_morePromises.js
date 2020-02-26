
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





















