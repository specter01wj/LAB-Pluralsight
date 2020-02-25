
'use strict';


function doAsync1() {
	let p = new Promise(function(resolve, reject) {
		console.log('in promise code');
		setTimeout(function() {
			console.log('resolving...');
			resolve();
		}, 2000);
	});
	return p;
}
let promise1 = doAsync1();













