import { of, from } from 'rxjs';
let a1 = of(2, 4, 6, 8);
let b1 = from([3, 5, 7, 9]);
a1.subscribe(val => {
    console.log('Value from of:', val);
});
b1.subscribe(val => {
    console.log('Value from from:', val);
});
