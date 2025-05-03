import { of, from } from 'rxjs';

let a1 = of(2, 4, 6, 8);

a1.subscribe(val => {
  console.log('Value from of:', val);
});



