import { Observable, of, from, fromEvent, concat, interval, throwError, Subject,
				 asyncScheduler, asapScheduler, queueScheduler, merge } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil,
				 multicast, refCount, publish, share,
				 publishLast, publishBehavior, publishReplay,
				 observeOn } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



console.log('Start script.');

from([1,2,3,4], queueScheduler).pipe(
  tap(value => console.log(`Value: ${value}`)),

  
  observeOn(asyncScheduler),
  tap(value => console.log(`Doubled value: ${value * 2}`))
)
.subscribe();

console.log('End script.');





