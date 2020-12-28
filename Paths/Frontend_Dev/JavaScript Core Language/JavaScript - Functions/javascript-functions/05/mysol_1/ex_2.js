
let sayHi = function greet(...names) {
  names.forEach( (name) => {
  	console.log('Hi ' + name);
  });
}

sayHi('Mary', 'John', 'Tim');



let sayHi2 = function greet2(message, ...names) {
	console.log(message + 'everyone!');
  names.forEach( (name) => {
  	console.log('Hi ' + name);
  });
}

sayHi2('Welcome ', 'Mary', 'John', 'Tim');










