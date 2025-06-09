import { of, from, Subscription, map, catchError, concatMap, range, delay, mergeMap, switchMap } from 'rxjs';


range(21, 5)
  .pipe(
    switchMap(i => of(i)
      .pipe(
        delay(randomDelay())
      )
    )
  ).subscribe({
    next: x => console.log('switchMap: ', x),
});


function randomDelay(): number {
  return Math.floor(Math.random() * 1000) + 500;
}

