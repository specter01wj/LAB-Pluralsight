
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



function doAsync2() {
	let p = new Promise(function(resolve, reject) {
		console.log('in promise code');
		setTimeout(function() {
			console.log('rejecting...');
			reject();
		}, 2000);
	});
	return p;
}
let promise2 = doAsync2();



/*function doAsync3() {

}

doAsync3().then(function() {
	console.log('Fullfilled!');
},
function() {
	console.log('Rejected!');
});*/



/*function doAsync4() {

}

doAsync4().then(function(value) {
	console.log('Fullfilled!' + value);
},
function(reason) {
	console.log('Rejected!' + reason);
});*/



/*function doAsync5() {

}

doAsync5().then(function(value) {
	console.log('Fullfilled!' + value);
	return 'For Sure';
}).then(function(value) {
	console.log('Rejected!' + value);
});*/



/*function doAsync6() {

}

doAsync6().catch(function(reason) {
	console.log('Error: ' + reason);
});*/






















