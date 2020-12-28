
function sayHi(name = 'World') {
  console.log('Hello ' + name);
}

sayHi();
sayHi('James');



function sayHi2(message, name = 'World') {
  console.log(message + name);
}

sayHi2('Hi! ');
sayHi2('Hello? ', 'James');










