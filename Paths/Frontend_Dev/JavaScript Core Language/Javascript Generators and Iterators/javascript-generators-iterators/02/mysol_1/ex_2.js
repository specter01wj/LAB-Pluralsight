
const arr1 = [0, 3, 4, 6];


const it = arr1[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



const map1 = new Map();
map1.set('key1', 'val1');
map1.set('key2', 'val2');
const mapIterator = map1[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for(let [key, value] of map1) {
  console.log(`${key} and ${value}`);
}


const mySet1 = new Set();
mySet1.add('data1');
mySet1.add('data2');
const setIterator = mySet1[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());

for(let value of mySet1) {
  console.log(value);
}









