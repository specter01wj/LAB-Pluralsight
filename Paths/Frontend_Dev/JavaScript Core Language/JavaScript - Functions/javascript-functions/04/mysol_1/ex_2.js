
let person1 = { name: 'John', age: 22 };
let person2 = { name: 'Mary', age: 26 };

let sayHi = function() {
  console.log('Hi, ' + this.name);
}

sayHi.call(person1);
sayHi.call(person2);











