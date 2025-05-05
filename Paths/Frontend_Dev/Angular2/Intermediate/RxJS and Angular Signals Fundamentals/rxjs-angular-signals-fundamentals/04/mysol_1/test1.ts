import { of, from, Subscription, map } from 'rxjs';

let subApples!: Subscription;

const apples$ = from([
  {id: 1, type: 'macintosh'},
  {id: 2, type: 'gala'},
  {id: 3, type: 'fuji'},
]);

subApples = apples$.pipe(
  map(a => ({
    ...a, color: 'red'
  }))
).subscribe(val => {
  console.log('Apple:', val);
});


