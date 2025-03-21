
function myIterator(start, finish) {
  let index = start;
  let count = 0;

  return {
    next() {
      let result;
      if(index < finish) {
        result = { value: index, done: false };
        index++;
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      }
    }
  }

}



const it = myIterator(0, 10);
let res = it.next();
while(!res.done) {
  console.log(res.value);
  res = it.next();
}


const it2 = myIterator(0, 10);

for(let val, result; (result = it2.next()) && !result.done; ) {
  val = result.value;
  console.log(val);
}







