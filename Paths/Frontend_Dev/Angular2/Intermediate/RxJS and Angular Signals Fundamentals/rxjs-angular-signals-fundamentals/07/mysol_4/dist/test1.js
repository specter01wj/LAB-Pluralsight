import { of, range, delay, switchMap } from 'rxjs';
range(21, 5)
    .pipe(switchMap(function (i) { return of(i)
    .pipe(delay(randomDelay())); })).subscribe({
    next: function (x) { return console.log('switchMap: ', x); }
});
function randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
}
