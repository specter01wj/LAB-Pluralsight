import { of, concatMap, range, delay } from 'rxjs';
range(1, 5)
    .pipe(concatMap(function (i) { return of(i)
    .pipe(delay(randomDelay())); })).subscribe({
    next: function (x) { return console.log('concatMap: ', x); }
});
function randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
}
