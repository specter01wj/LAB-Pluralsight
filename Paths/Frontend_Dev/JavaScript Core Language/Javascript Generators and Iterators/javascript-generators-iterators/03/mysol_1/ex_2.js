
function *gen1() {
  yield 1;
  yield 2;
}

function *gen2() {
  yield *gen1();
}



let it1 = gen2();
console.log(it1.next());
console.log(it1.next());










