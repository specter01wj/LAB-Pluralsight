
function greeting() {
  console.log('Hello!');
}

greeting();


function greetings() {
  return 'Hello James!';
}

let message1 = greetings();
console.log(message1);


function sum(num1, num2) {
  return num1 + num2;
}

let result1 = sum(2, 3);
console.log(result1);



function printAll() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printAll(1, 2, 3, 4, 5);
printAll(10, 20);

