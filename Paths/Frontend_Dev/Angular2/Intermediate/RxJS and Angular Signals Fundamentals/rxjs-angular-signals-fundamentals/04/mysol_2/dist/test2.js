import { of, from, map, tap } from 'rxjs';
let subApples;
let subNumbers;
const apples$ = from([
    { id: 1, type: 'macintosh' },
    { id: 2, type: 'gala' },
    { id: 3, type: 'fuji' },
]);
const numbers$ = of(2, 4, 6);
subApples = apples$.pipe(map(a => ({
    ...a, color: 'red'
})), tap(a => console.log('Apple:', a))).subscribe();
subNumbers = numbers$.pipe(map(item => item * 2), tap(item => console.log('Map x2:', item))).subscribe(val => { });
