
/*function *timestampGenerator() {
  console.log(Date.now());
  yield;
  console.log('exection continued.');
}*/

function *timestampGenerator1() {
  let ts = Date.now();
  var additionalTime = yield;
  console.log(additionalTime);
  if(additionalTime) {
    ts = ts + additionalTime;
  }
  console.log(ts);
}

// timestampGenerator();
/*let it1 = timestampGenerator();
it1.next();
it1.next();*/

/*for(let val of it1) {
  console.log(val);
}*/

let it2 = timestampGenerator1();
it2.next();
it2.next(1000 * 60);






