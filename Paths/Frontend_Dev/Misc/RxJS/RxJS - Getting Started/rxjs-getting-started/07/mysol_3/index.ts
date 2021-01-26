import { Observable, of, from, fromEvent, concat, interval, throwError, Subject } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil,
				 multicast, refCount, publish, share } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



let source$ = interval(1000).pipe(
	take(4),
	multicast(new Subject())
);


// let subject$ = new Subject();
// source$.subscribe(subject$);


source$.subscribe(
  value => console.log(`Observer 1: ${value}`),
);



setTimeout(() => {
	source$.subscribe(
	  value => console.log(`Observer 2: ${value}`),
	);
}, 1000);


setTimeout(() => {
	source$.subscribe(
	  value => console.log(`Observer 3: ${value}`),
	);
}, 2000);



source$.connect();






