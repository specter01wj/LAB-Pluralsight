
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



function sayHi2() {
  console.log('Hi');
  console.log(this);
}

let greeting2 = new sayHi2();
