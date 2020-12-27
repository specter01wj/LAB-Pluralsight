
function greeting() {
  let message = 'Hello';
}

greeting();
// console.log(message);


function greeting2() {
	let message = 'Hello';
	let sayHi = function hi() {
		let message = 'Hi';
		console.log(message);
	}
	sayHi();
	console.log(message);
}

greeting2();









