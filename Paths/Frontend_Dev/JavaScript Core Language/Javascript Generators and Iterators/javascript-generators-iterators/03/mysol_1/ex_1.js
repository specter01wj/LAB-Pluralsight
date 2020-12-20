
function *timestampGenerator() {
  console.log(Date.now());
  yield;
  console.log('exection continued.');
}

// timestampGenerator();
let it1 = timestampGenerator();
it1.next();
it1.next();

/*for(let val of it1) {
  console.log(val);
}*/








