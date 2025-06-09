import { of, range, delay, switchMap } from 'rxjs';
range(21, 5)
    .pipe(switchMap(i => of(i)
    .pipe(delay(randomDelay())))).subscribe({
    next: x => console.log('switchMap: ', x),
});
function randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
}
