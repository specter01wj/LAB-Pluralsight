import { of, range, delay, mergeMap } from 'rxjs';
range(11, 5)
    .pipe(mergeMap(i => of(i)
    .pipe(delay(randomDelay())))).subscribe({
    next: x => console.log('mergeMap: ', x),
});
function randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
}
