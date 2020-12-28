
function sayHi() {
  console.log('Hi');
  console.log(this);
}

sayHi();



let greeting1 = {};
greeting1.sayHi = function() {
  console.log('Hi');
  console.log(this);
}

greeting1.sayHi();


