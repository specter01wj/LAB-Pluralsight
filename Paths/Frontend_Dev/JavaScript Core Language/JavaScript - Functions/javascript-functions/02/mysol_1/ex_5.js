
let greeting1 = (function() {
	let message = 'Hello';
	let getMessage = function() {
		return message;
	}
})();
// console.log(greeting1.message);
// console.log(greeting1.getMessage());


let greeting2 = (function() {
	let message = 'Hello';
	let getMessage = function() {
		return message;
	};

	return {
		getMessage: getMessage,
	}
})();
console.log(greeting2.getMessage());



function setupCounter(val) {
	return function counter() {
		return val++;
	}
}

let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());
let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());





