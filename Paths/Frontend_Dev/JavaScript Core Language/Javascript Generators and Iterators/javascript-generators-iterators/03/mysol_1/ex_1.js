
function *timestampGenerator() {
  console.log(Date.now());

}

// timestampGenerator();
let it1 = timestampGenerator();
it1.next();

for(let val of it1) {
  console.log(val);
}








