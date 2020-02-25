
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
// let promise1 = doAsync1();



function doAsync2() {
	let p = new Promise(function(resolve, reject) {
		console.log('in promise code');
		setTimeout(function() {
			console.log('resolving...');
			reject();
		}, 2000);
	});
	return p;
}
// let promise2 = doAsync2();



function doAsync3() {

}

doAsync3().then(function() {
	console.log('Fullfilled!');
},
function() {
	console.log('Rejected!');
});






















