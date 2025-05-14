import { of, from, Subscription, map } from 'rxjs';

let subApples!: Subscription;
let subNumbers!: Subscription;

const apples$ = from([
  {id: 1, type: 'macintosh'},
  {id: 2, type: 'gala'},
  {id: 3, type: 'fuji'},
]);

const numbers$ = of(2, 4, 6);

subApples = apples$.pipe(
  map(a => ({
    ...a, color: 'red'
  }))
).subscribe(val => {
  console.log('Apple:', val);
});

subNumbers = numbers$.pipe(
  map(item => item * 2)
).subscribe(val => {
  return console.log('Map x2:', val)
});
