
function *gen1() {
  yield 1;
  yield 2;

  return 4;
}

function *gen2() {
  let val = yield *gen1();
  yield 3;
  yield val;
}


function gen3() {
  return ['three', 'six', 'nine']
}

function *gen4() {
  let val = yield *gen3();
}



let it1 = gen2();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

let it2 = gen4();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());










