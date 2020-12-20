
/*function *timestampGenerator() {
  console.log(Date.now());
  yield;
  console.log('exection continued.');
}*/

function *timestampGenerator1() {
  let ts = Date.now();
  console.log('orig ts: ', ts);
  yield ts;
  var additionalTime = yield;
  console.log('additionalTime: ', additionalTime);
  if(additionalTime) {
    ts = ts + additionalTime;
  }
  console.log('updated ts: ', ts);
}

// timestampGenerator();
/*let it1 = timestampGenerator();
it1.next();
it1.next();*/

/*for(let val of it1) {
  console.log(val);
}*/

let it2 = timestampGenerator1();
let origTimeStamp = it2.next();
console.log(origTimeStamp);
it2.next();





it2.next(1000 * 60);



function *randomNum() {
  while(true) {
    yield Math.floor(Math.random() * 100);
  }
}

let it3 = randomNum();

function getRandomNum() {
  return it3.next().value;
}

console.log(getRandomNum());









