
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



let it1 = gen2();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());










