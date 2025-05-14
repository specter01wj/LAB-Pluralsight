import { of, from, map, tap, filter, timer, take } from 'rxjs';
let subApples;
let subNumbers;
let subFilter;
let subTimer;
const apples$ = from([
    { id: 1, type: 'macintosh' },
    { id: 2, type: 'gala' },
    { id: 3, type: 'fuji' },
]);
const numbers$ = of(2, 4, 6);
const numbers_2$ = of(2, 3, 4, 5, 6);
subApples = apples$.pipe(map(a => ({
    ...a, color: 'red'
})), tap(a => console.log('Apple:', a))).subscribe();
subNumbers = numbers$.pipe(map(item => item * 2), tap(item => console.log('Map x2:', item))).subscribe();
subFilter = numbers_2$.pipe(filter(x => x % 2 === 0), tap(item => console.log('Even#:', item))).subscribe();
subTimer = timer(0, 1000).pipe(take(5)).subscribe({
    next: (item) => console.log('Timer: ', item),
    error: (error) => console.log('Timer Error: ', error),
    complete: () => console.log('No more ticks!'),
});
