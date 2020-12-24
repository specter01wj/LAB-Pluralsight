
function *errorHandling() {
	try {
		yield 1;
		yield 2;











		
		yield 3;
	} catch(error) {
		console.error(error);
	}
}


let errorIt1 = errorHandling();

console.log(errorIt1.next());
errorIt1.throw('error message here! JW');
console.log(errorIt1.next());








