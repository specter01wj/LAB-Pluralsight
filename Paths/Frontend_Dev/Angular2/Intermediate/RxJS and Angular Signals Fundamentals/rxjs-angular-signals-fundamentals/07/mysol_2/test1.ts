import { of, from, Subscription, map, catchError, concatMap, range, delay } from 'rxjs';


range(1, 5)
  .pipe(
    concatMap(i => of(i)
      .pipe(
        delay(randomDelay())
      )
    )
  ).subscribe({
    next: x => console.log('concatMap: ', x),
});


function randomDelay(): number {
  return Math.floor(Math.random() * 1000) + 500;
}

