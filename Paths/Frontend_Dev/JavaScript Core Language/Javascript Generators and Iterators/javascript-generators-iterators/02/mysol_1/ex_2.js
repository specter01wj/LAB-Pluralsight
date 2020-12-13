
const arr1 = [0, 3, 4, 6];


const it = arr1[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



const map1 = new Map();
map.set('key1', 'val1');
map.set('key2', 'val2');
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for(let [key, value] of map) {
  console.log(`${key} and ${value}`);
}









